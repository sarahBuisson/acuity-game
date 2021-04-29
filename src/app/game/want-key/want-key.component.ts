import {Component, HostListener, OnInit} from '@angular/core';
import {WantedKeyPress} from '../../../domain/model';
import {IntervalService} from '../interval.service';
import {AbstractWantComponent} from '../want/want-abstract.component';

@Component({
  selector: 'app-want-key',
  template: `
    <div class="key plump" [ngStyle]="{backgroundColor:backgroundColor} ">{{keyLabel()}}</div>
  `,

  styleUrls: ['./want-key.scss']
})
export class WantKeyComponent extends AbstractWantComponent<WantedKeyPress> implements OnInit {


  constructor(intervalService: IntervalService) {
    super(intervalService);
  }


  public get backgroundColor(): string {
    return super.backgroundColor;
  }

  ngOnInit(): void {
  }


  @HostListener('document:keydown', ['$event'])
  handleKeyboardDownEvent($event: KeyboardEvent): void {
    this.process($event);
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardUpEvent($event: KeyboardEvent): void {
    this.process($event);

  }

  public maybeDone($event: Event): boolean {
    return $event instanceof KeyboardEvent && $event.key.toLowerCase() === this.want.key.toLowerCase();
  }

  keyLabel(): string {
    if (this.want.key.length === 1) {
      return this.want.key.toUpperCase();
    } else {
      switch (this.want.key) {
        default:
          return this.want.key;
      }
    }
  }
}
