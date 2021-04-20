import {ComponentFixture, TestBed} from '@angular/core/testing';
import {WantedClick} from '../../../domain/model';
import {AbstractWantComponent} from './want-abstract.component';
import {WantClickComponent} from '../want-click/want-click.component';

describe('AbstractWantComponent', () => {
  let component: WantClickComponent;
  let fixture: ComponentFixture<WantClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbstractWantComponent, WantClickComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantClickComponent);
    component = fixture.componentInstance;
    component.want = new WantedClick(10);
    component.want.timeout = 1000;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute color', () => {
    expect(component.backgroundColor).toEqual('#ADFF2F');
    component.want.time += 100;
    expect(component.backgroundColor).toEqual('#BDFF52');
    component.want.time += 100;
    expect(component.backgroundColor).toEqual('#CEFF76');
    component.want.time += 100;
    expect(component.backgroundColor).toEqual('#DEFF99');
    component.want.time += 100;
    expect(component.backgroundColor).toEqual('#EFFFBD');
    component.want.time += 100;
    expect(component.backgroundColor).toEqual('#FFFFE0');
    component.want.time += 100;
    expect(component.backgroundColor).toEqual('#FFCCB3');
    component.want.time += 100;
    expect(component.backgroundColor).toEqual('#FF9986');
    component.want.time += 100;
    expect(component.backgroundColor).toEqual('#FF665A');
    component.want.time += 100;
    expect(component.backgroundColor).toEqual('#FF332D');
    component.want.time = component.want.timeout;
    expect(component.backgroundColor).toEqual('#FF0000');
  });
});
