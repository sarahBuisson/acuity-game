import {Component, HostListener, OnInit} from '@angular/core';
import {WantedKeyPress} from '../../../domain/model';
import {IntervalService} from '../interval.service';
import {AbstractWantComponent} from '../want/want-abstract.component';

@Component({
  selector: 'app-want-key',
  template: `
    <div class="key plump" [ngStyle]="{backgroundColor:backgroundColor} ">{{keyLabel()}}</div>
  `,
  styles: [`:host {
    padding: 5px;
    display: inline-block;

  }

  .key {
    border-radius: 10px;
    padding: 10px 15px;
    border-color: darkgreen;
  }
  `
  ],
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
    return $event instanceof KeyboardEvent && $event.key === this.want.key;
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
