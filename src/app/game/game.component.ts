import {ChangeDetectorRef, Component, HostListener, Input, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {GameService} from './game.service';
import {Subscription} from 'rxjs';
import {PartyRunner, Wanted, WantedClick, WantedComposite, WantedKeyPress, WantedShortCut, WantedText} from '../../domain/model';
import {StoreService} from '../store.service';
import {IntervalService} from './interval.service';


@Component({
  selector: 'app-game',
  template: `
    <div>
      <app-title textSize="20"></app-title>
      <div class="gameboard">
        <app-want-wrapper *ngFor="let wanted of stillWanted"
                          [want]="wanted">
          <app-want-click *ngIf="isWantedClick(wanted)"
                          [want]="wanted"
                          [isDone]="isDone(wanted)"
          ></app-want-click>

          <app-want-key
            *ngIf="isWantedKeyPress(wanted)"
            [want]="wanted"
            [isDone]="isDone(wanted)"
          ></app-want-key>

          <app-want-shortcut *ngIf="isWantedShortcut(wanted)"

                             [want]="wanted"
                             [isDone]="isDone(wanted)"
          ></app-want-shortcut>

          <app-want-composite *ngIf="isWantedComposite(wanted)"

                              [want]="wanted"
                              [isDone]="isDone(wanted)"
          ></app-want-composite>

          <app-want-text *ngIf="isWantedText(wanted)"

                         [want]="wanted"
                         [isDone]="isDone(wanted)"
          ></app-want-text>
        </app-want-wrapper>
        <ul class="toolbar">

          <li> score:
            <span class="bordered-invert"> {{score}}</span>
          </li>
          <li>
            object:
            <span class="bordered-invert">{{stillWanted.length}}</span>
          </li>
          <li>
            missed:
            <span class="bordered-invert">{{missed}}</span>
          </li>
          <li>
            <button (click)="togglePause()"
                    [class]="{'button-pause':pause,'button-play':!pause}">{{pause ? ' play' : 'stop' }}</button>
          </li>
        </ul>
      </div>

    </div> <app-score [score]="score" [missed]="missed" *ngIf="isPartyLost()"></app-score>`,

  styleUrls: ['./game.scss']
})
export class GameComponent implements OnInit, OnDestroy, OnChanges {

  subscription: Subscription;
  @Input()
  currentParty: PartyRunner;

  pause = false;
  score = 0;
  missed = 0;

  stillWanted: Wanted[] = new Array<Wanted>();
  playerInput: Event[] = new Array<Event>();


  constructor(private gameService: GameService,
              private store: StoreService,
              private intervalService: IntervalService,
              private ref: ChangeDetectorRef) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    this.playerInput.push(event);
  }

  ngOnInit(): void {
    if (!this.currentParty) {
      this.currentParty = this.store.currentParty;
    }
    this.subscription = this.currentParty.flow.subscribe((next) => {
      if (!this.pause && !this.isPartyLost()) {
        this.stillWanted.push(next);
      }
    });
    this.store.currentParty.run();

    this.intervalService.setInterval(10, () => {
      if (!this.pause && !this.isPartyLost()) {
        this.stillWanted.forEach(w => w.time += 10);
      }
      this.missed += this.stillWanted.filter(w => w.isMissed()).length;
      this.stillWanted = this.stillWanted.filter(w => w.time < w.timeout );
      this.ref.detectChanges();
    }, this);

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  isDone(wanted: Wanted): () => void {
    return () => {
      if (!this.pause) {
        this.stillWanted = this.stillWanted.filter((it: Wanted) => it !== wanted);
        this.score += Math.floor(100 * Math.max(0, wanted.remainingPercentOfTime));
      }
    };
  }

  isWantedKeyPress(wanted: Wanted): boolean {
    return wanted instanceof WantedKeyPress;

  }

  isWantedClick(wanted: Wanted): boolean {
    return wanted instanceof WantedClick;

  }

  isWantedComposite(wanted: Wanted): boolean {
    return wanted instanceof WantedComposite;

  }

  isWantedShortcut(wanted: Wanted): boolean {
    return wanted instanceof WantedShortCut;

  }

  isWantedText(wanted: Wanted): boolean {
    return wanted instanceof WantedText;

  }

  togglePause(): void {
    this.pause = !this.pause;
  }

  isPartyLost(): boolean {
    return this.missed >= this.currentParty.maxMissed;
  }
}
