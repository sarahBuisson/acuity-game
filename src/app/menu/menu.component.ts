import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <div>
      <app-title></app-title>

      <div class="bordered menu">
        <button routerLink="play">Play !</button>
        <button routerLink="new">Custom party...</button>
      </div>
    </div>`,

  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
