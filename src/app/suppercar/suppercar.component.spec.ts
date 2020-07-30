import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppercarComponent } from './suppercar.component';

describe('SuppercarComponent', () => {
  let component: SuppercarComponent;
  let fixture: ComponentFixture<SuppercarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppercarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppercarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
