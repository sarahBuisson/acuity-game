import {Injectable} from '@angular/core';
import {initPartyRunner, PartyConfig, PartyRunner} from '../domain/model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public currentParty: PartyRunner;

  constructor() {
    this.currentParty = initPartyRunner(new PartyConfig());
  }
}
