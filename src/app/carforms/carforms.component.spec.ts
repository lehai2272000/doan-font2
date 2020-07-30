import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarformsComponent } from './carforms.component';

describe('CarformsComponent', () => {
  let component: CarformsComponent;
  let fixture: ComponentFixture<CarformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
