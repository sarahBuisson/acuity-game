import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantClickComponent } from './want-click.component';
import {WantedClick} from '../../../domain/model';

describe('WantClickComponent', () => {
  let component: WantClickComponent;
  let fixture: ComponentFixture<WantClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantClickComponent);
    component = fixture.componentInstance;
    component.want = new WantedClick(100);
    component.isDone = () => {
    };
    fixture.detectChanges();
  });

  it('should disapear when click', () => {
    // Init

    fixture.detectChanges();
    spyOn(component, 'isDone').and.callThrough();
    spyOn(component, 'maybeDone').and.callThrough();
    spyOn(component.want, 'isStillDoable').and.returnValue(true);
    expect(component).toBeTruthy();

    // Given

    // When
    component.ngClick(new MouseEvent(''));

    // Then
    expect(component.maybeDone).toHaveBeenCalled();
    expect(component.isDone).toHaveBeenCalled();

  });
});
