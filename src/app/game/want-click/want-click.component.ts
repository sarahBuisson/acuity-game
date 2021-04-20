import {Component, HostBinding, Input} from '@angular/core';

import {WantedClick} from '../../../domain/model';
import {AbstractWantComponent} from '../want/want-abstract.component';
import {IntervalService} from '../interval.service';

@Component({
  selector: 'app-want-click',
  template: `
    <div (click)="ngClick($event)" [ngStyle]="clickStyles"></div>`,
  styles: [`div {
    display: inline-block;
    border-radius: 50%;
  }`]
})
export class WantClickComponent extends AbstractWantComponent<WantedClick> {
  @Input()
  public want: WantedClick;


  @Input()
  public isDone: (WantedClick) => void;

  get clickStyles(): any {
    return {
      backgroundColor: super.backgroundColor,
      width: this.want.range + 'px',
      height: this.want.range + 'px'
    };
  }


  constructor(protected intervalService: IntervalService) {
    super(intervalService);
  }

  @HostBinding('style.width')
  get widthStyle(): string {
    return `${this.want.range}px`;
  }

  @HostBinding('style.height')
  get heightStyle(): string {
    return `${this.want.range}px`;
  }


  ngClick($event: Event): void {
    this.process($event);
  }

  public maybeDone($event: Event): boolean {
    return true;
  }
}
