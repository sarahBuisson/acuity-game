import {Component, Input} from '@angular/core';
import {Wanted} from '../../../domain/model';
import {IntervalService} from '../interval.service';
import * as Color from 'color';

const OK_COLOR = new Color('greenyellow');
const MEH_COLOR = new Color('lightyellow');
const EMERGENCY_COLOR = new Color('red');

@Component({template: ''})
export abstract class AbstractWantComponent<T extends Wanted> {
  @Input()
  public want: T;

  @Input()
  public isDone: (T) => void;

  protected constructor(protected intervalService: IntervalService) {
  }

  public abstract maybeDone($event: Event): boolean;

  public get backgroundColor(): string {
    let percentOfTimeRemaining = this.want.remainingPercentOfTime;
    let percentOfTimePassed = 1.0 - this.want.remainingPercentOfTime;
    let orignalColor;
    let destinationColor;
    if (percentOfTimePassed <= 0.5) {
      orignalColor = OK_COLOR;
      destinationColor = MEH_COLOR;
      percentOfTimePassed = percentOfTimePassed * 2;
      percentOfTimeRemaining = 1 - percentOfTimePassed;

    } else {
      orignalColor = MEH_COLOR;
      destinationColor = EMERGENCY_COLOR;
      percentOfTimePassed = (percentOfTimePassed - 0.5) * 2;
      percentOfTimeRemaining = 1 - percentOfTimePassed;
    }
    return new Color({

      r: destinationColor.red() * percentOfTimePassed + orignalColor.red() * percentOfTimeRemaining,
      g: destinationColor.green() * percentOfTimePassed + orignalColor.green() * percentOfTimeRemaining,
      b: destinationColor.blue() * percentOfTimePassed + orignalColor.blue() * percentOfTimeRemaining
    }).hex();

  }

  protected process($event: Event): void {
    if (this.maybeDone($event)) {
      this.want.isCurrentlySatisfied = true;
      this.isDone(this.want);
      this.intervalService.setTimeout(2000, () => {
        this.want.isCurrentlySatisfied = false;
      }, this);
    }
  }

}
