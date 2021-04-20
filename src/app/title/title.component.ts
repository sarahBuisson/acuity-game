import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<h1>
    <span class="othercolor">T</span>
    <span>est </span>
    <span>Yo</span>
    <span class="othercolor">Ur </span>
    <span>Acu</span>
    <span class="othercolor">R</span>
    <span>atY </span>
    <span class="othercolor">!</span>
  </h1>`,
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
