import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PartyEditorComponent} from './party-editor.component';
import {FormsModule} from '@angular/forms';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatRippleModule} from '@angular/material/core';
import {RouterTestingModule} from '@angular/router/testing';

describe('PartyEditorComponent', () => {
  let component: PartyEditorComponent;
  let fixture: ComponentFixture<PartyEditorComponent>;

  beforeEach(async () => {
    const routes = [];
    await TestBed.configureTestingModule({
      declarations: [PartyEditorComponent, MatCheckbox],
      imports: [
        FormsModule, MatRippleModule,
        RouterTestingModule.withRoutes(routes)]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
