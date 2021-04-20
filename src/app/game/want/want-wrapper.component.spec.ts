import {ComponentFixture, TestBed} from '@angular/core/testing';
import {WantedClick} from '../../../domain/model';
import {WantWrapperComponent} from './want-wrapper.component';

describe('WantComponent', () => {
  let component: WantWrapperComponent;
  let fixture: ComponentFixture<WantWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantWrapperComponent);
    component = fixture.componentInstance;
    component.want = new WantedClick(10);
    component.want.position = {x: 0, y: 0};
    component.want.destination = {x: 100, y: 50};
    component.want.time = 0;
    component.want.timeout = 1000;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute position', () => {
    expect(component.positionX).toEqual('0%');
    expect(component.positionY).toEqual('0%');
    component.want.time += 100;
    expect(component.positionX).toEqual('10%');
    expect(component.positionY).toEqual('5%');
    component.want.time += 100;
    expect(component.positionX).toEqual('20%');
    expect(component.positionY).toEqual('10%');
    component.want.time = component.want.timeout;
    expect(component.positionX).toEqual('100%');
    expect(component.positionY).toEqual('50%');
  });
});
