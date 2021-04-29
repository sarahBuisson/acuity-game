import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GameComponent} from './game.component';
import {PartyRunner} from '../../domain/model';
import {WantWrapperComponent} from './want/want-wrapper.component';
import {WantKeyComponent} from './want-key/want-key.component';
import {WantClickComponent} from './want-click/want-click.component';
import {WantCompositeComponent} from './want-composite/want-composite.component';
import {TitleComponent} from '../title/title.component';
import {WantTextComponent} from './want-text/want-text.component';
import {WantShortcutComponent} from './want-shortcut/want-shortcut.component';
import {ScoreComponent} from './score/score.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameComponent, WantWrapperComponent,
        WantKeyComponent, WantClickComponent,
        WantCompositeComponent, TitleComponent,
        WantTextComponent, WantShortcutComponent, ScoreComponent],
      imports: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    component.currentParty = new PartyRunner();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
