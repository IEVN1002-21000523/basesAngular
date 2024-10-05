import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistenciasangularComponent } from './resistenciasangular.component';

describe('ResistenciasangularComponent', () => {
  let component: ResistenciasangularComponent;
  let fixture: ComponentFixture<ResistenciasangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResistenciasangularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResistenciasangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
