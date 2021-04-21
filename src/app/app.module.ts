import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GameComponent } from './game/game.component';
import { WantClickComponent } from './game/want-click/want-click.component';
import { WantKeyComponent } from './game/want-key/want-key.component';
import { WantCompositeComponent } from './game/want-composite/want-composite.component';
import { RoutingModule } from 'angular-routing';
import {RouterModule, Routes} from '@angular/router';
import { PartyEditorComponent } from './party-editor/party-editor.component';
import { MenuComponent } from './menu/menu.component';
import {FormsModule} from '@angular/forms';
import {initPartyRunner, PartyConfig} from '../domain/model';
import {WantWrapperComponent} from './game/want/want-wrapper.component';
import { TitleComponent } from './title/title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {WantShortcutComponent} from './game/want-shortcut/want-shortcut.component';
import {WantTextComponent} from './game/want-text/want-text.component';
import { ScoreComponent } from './game/score/score.component';

const routes: Routes = [
  {path: 'game', component: GameComponent},
  {path: 'play', component: GameComponent, data: {currentParty: initPartyRunner(new PartyConfig())}},
  {path: 'new', component: PartyEditorComponent},
  {path: 'menu', component: MenuComponent},
  { path: '**', component: MenuComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    WantWrapperComponent,
    WantClickComponent,
    WantKeyComponent,
    WantCompositeComponent,
    WantShortcutComponent,
    WantTextComponent,
    PartyEditorComponent,
    MenuComponent,
    TitleComponent,
    ScoreComponent
  ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        RoutingModule.forRoot(),
        RouterModule.forRoot(routes),
        FormsModule,
        BrowserAnimationsModule,
        MatCheckboxModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
