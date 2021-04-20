import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {initPartyRunner, PartyConfig} from '../../domain/model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-party-editor',
  template: `
    <ul>
      <li>
        <mat-checkbox  [(ngModel)]="useClick"></mat-checkbox>include click


      </li>
      <li>
        <mat-checkbox  [(ngModel)]="useKey"></mat-checkbox>
        <label>include key</label>
      </li>
      <li>
        <mat-checkbox [(ngModel)]="useKeySuite"></mat-checkbox>
        <label>include key suite</label>
      </li>
      <li>
        <mat-checkbox [(ngModel)]="useTexts"></mat-checkbox>
        <label>full words</label>
      </li>
      <li>

        <mat-checkbox [(ngModel)]="useShortcut"></mat-checkbox>

        <label>    include shortcut</label></li>
      <button (click)="createParty()">create</button>
    </ul>`,
  styleUrls: ['./party-editor.component.css']
})
export class PartyEditorComponent extends PartyConfig implements OnInit {

  constructor(private storeService: StoreService, private router: Router) {
    super();
  }

  ngOnInit(): void {
  }

  createParty(): void {
    this.storeService.currentParty = initPartyRunner(this);
    this.router.navigateByUrl('game');
  }
}
