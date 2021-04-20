import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WantKeyComponent} from './want-key.component';
import {WantedKeyPress} from '../../../domain/model';

describe('WantKeyComponent', () => {
  let component: WantKeyComponent;
  let fixture: ComponentFixture<WantKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WantKeyComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantKeyComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should be done when press  e key', () => {
    // Init
    component.isDone = () => {
    };
    component.maybeDone = ($event) => true;
    spyOn(component, 'isDone').and.callThrough();
    spyOn(component, 'maybeDone').and.callThrough();
    expect(component).toBeTruthy();

    // Given
    component.want = new WantedKeyPress('e');
    fixture.detectChanges();

    // When
    const keyboardEvent = new KeyboardEvent('keydown', {key: 'e'});
    fixture
      .nativeElement
      .dispatchEvent(keyboardEvent);

    fixture.detectChanges();
    component.handleKeyboardDownEvent(keyboardEvent);

    // Then
    expect(component.maybeDone).toHaveBeenCalled();
    expect(component.isDone).toHaveBeenCalled();

  });


  it('should stay when press f key', () => {
    // Init
    component.isDone = () => undefined;
    spyOn(component, 'isDone').and.callThrough();
    spyOn(component, 'maybeDone').and.callThrough();
    expect(component).toBeTruthy();

    // Given
    component.want = new WantedKeyPress('e');
    fixture.detectChanges();

    // When
    const keyboardEvent = new KeyboardEvent('keydown', {key: 'f'});
    component.handleKeyboardDownEvent(keyboardEvent);

    // Then
    expect(component.maybeDone).toHaveBeenCalled();
    expect(component.isDone).not.toHaveBeenCalled();

  });
});
