import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-score',
  template: `
    <div class="bordered"><h1> End of the game:</h1>
      <p>You missed {{missed}} shortcuts.</p>
      <p>Your score is {{score}}.</p>
      <button routerLink="../play">Retry !</button>
    </div>
  <div class="background"></div>
  `,

  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  constructor() {
  }

  @Input()
  score: number;

  @Input()
  missed: number;

  ngOnInit(): void {
  }

}
