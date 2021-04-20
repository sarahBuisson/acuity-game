import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <app-title></app-title>
    <button routerLink="standardParty">Play !</button>
    <button routerLink="new">Custom party...</button>`,

  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
