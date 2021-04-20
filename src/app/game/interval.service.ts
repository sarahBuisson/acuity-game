import {Injectable, NgZone, OnDestroy} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntervalService implements OnDestroy {
  public toClear: Array<{ component: any, timeout: any }> = [];
  public toClearInterval: Array<{ component: any, interval: any }> = [];

  constructor(private ngZone: NgZone) {
  }


  setTimeout(time, obs, component): void {
    this.ngZone.runOutsideAngular(() => {
      const timeout = setTimeout(() => {
        obs();
        clearTimeout(timeout);
      }, time);
      this.toClear.push({component, timeout});
    });


  }

  setInterval(time, obs, component): void {
    this.ngZone.runOutsideAngular(() => {
      const interval = setInterval(() => {
        obs();
      }, time);
      this.toClearInterval.push({component, interval});
    });


  }

  clearForComponent(component): void {
    this.toClear.filter(f => f.component === component).forEach((i) => clearTimeout(i.timeout));
    this.toClearInterval.filter(f => f.component === component).forEach((i) => clearInterval(i.interval));
  }

  ngOnDestroy(): void {
    this.toClear.forEach((i) => clearTimeout(i.timeout));
    this.toClearInterval.forEach((i) => clearInterval(i.interval));
  }
}
