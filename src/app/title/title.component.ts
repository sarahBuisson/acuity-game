import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<h1>
    <span class="othercolor">S</span>
    <span>hort </span>
    <span>'</span>
    <span class="othercolor">e</span>
    <span>m </span>
    <span class="othercolor">C</span>
    <span>ut </span>
    <span class="othercolor">!</span>
  </h1>
  <h2>Do the short-cut the quickest you can !</h2>`,
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input()
  textSize = 52;

  constructor() {
  }

  ngOnInit(): void {
  }


  @HostBinding('style.font-size')
  public get backgroundColor(): string {
    return `${this.textSize}px`;
  }

}
