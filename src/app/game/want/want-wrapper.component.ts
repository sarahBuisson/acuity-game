import { Component, HostBinding, Input, OnInit} from '@angular/core';
import {Wanted} from '../../../domain/model';
import {IntervalService} from '../interval.service';

@Component({
  selector: 'app-want-wrapper',
  template: `
    <div><label>{{want?.label}}</label>
      <ng-content></ng-content>
    </div>`,
  styles: [`div {
    border-radius: 5px;
    transition: background-color 0.5s;
    position: absolute;
    display: block;
  }

  label {
    position: absolute;
    display: block;
    color: grey;
    font-size: smaller;
    background-color: rgba(255, 255, 255, .5);
    border-radius: 2px;
    padding: 5px;
    left: -15px;
    top: -15px;
    width: auto;
  }

  :host {
    position: absolute;
    transition: top 0.1s;
    transition: left 0.1s;
  }
  `]
})
export class WantWrapperComponent {

  @Input()
  want: Wanted;

  @HostBinding('style.left')
  public get positionX(): string {
    if (this.want) {
      const x = this.want.destination.x + (this.want.position.x - this.want.destination.x) * this.want.remainingPercentOfTime;
      return `${Math.floor(x)}%`;
    }
  }

  @HostBinding('style.top')
  public get positionY(): string {
    if (this.want) {
      const y = this.want.destination.y + (this.want.position.y - this.want.destination.y) * this.want.remainingPercentOfTime;
      return `${Math.floor(y)}%`;
    }
  }

  constructor(protected intervalService: IntervalService) {
  }

}
