import {Component, HostListener, OnInit} from '@angular/core';
import {Wanted, WantedClick, WantedComposite, WantedKeyPress} from '../../../domain/model';
import {IntervalService} from '../interval.service';
import {AbstractWantComponent} from '../want/want-abstract.component';

@Component({
  selector: 'app-want-shortcut',
  template: `
    <div class="main" (click)="ngClick($event)">
      <ng-container *ngFor="let wantedPart of want.wanteds;  index as index">
        <span *ngIf="index!=0">+</span>
        <app-want-click *ngIf="isWantedClick(wantedPart)"
                        [want]="wantedPart"
                        [isDone]="setPartDone(wantedPart)"
        ></app-want-click>
        <span>
        <app-want-key
          *ngIf="isWantedKeyPress(wantedPart)"
          [want]="wantedPart"
          [isDone]="setPartDone(wantedPart)"
        ></app-want-key></span>
      </ng-container>
    </div>
  `,
  styles: [`.main {
    width: 300px;
  }`]
})
export class WantShortcutComponent extends AbstractWantComponent<WantedComposite> implements OnInit {


  stillWanted: Wanted[] = new Array<Wanted>();

  constructor(protected intervalService: IntervalService) {
    super(intervalService);
  }

  ngOnInit(): void {
    this.stillWanted = this.want.wanteds.filter(() => true);
  }

  setPartDone(wanted: Wanted): () => void {
    return () => {
      wanted.isCurrentlySatisfied = true;
      this.intervalService.setTimeout(1000, () => {
        wanted.isCurrentlySatisfied = false;
      }, this);
      if (this.want.wanteds.every(w => w.isCurrentlySatisfied)) {
        this.isDone(this.want);
        console.log('partdone');
      }

    };
  }

  isWantedKeyPress(wanted: Wanted): boolean {
    return wanted instanceof WantedKeyPress;

  }

  isWantedClick(wanted: Wanted): boolean {
    return wanted instanceof WantedClick;

  }

  ngClick($event: Event): void {
    this.process($event);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent($event: KeyboardEvent): void {
    this.process($event);
  }

  public maybeDone($event: Event): boolean {
    return this.want.wanteds.every(w => w.isCurrentlySatisfied);
  }
}
