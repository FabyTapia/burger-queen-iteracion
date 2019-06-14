import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeseroComponent } from './mesero.component';
import { MenuService } from '../../sevicios/menu.service';


describe('MeseroComponent', () => {
  let component: MeseroComponent;
  let fixture: ComponentFixture<MeseroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeseroComponent ],
      providers: [MenuService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
