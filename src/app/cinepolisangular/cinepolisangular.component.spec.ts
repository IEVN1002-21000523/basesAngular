import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinepolisangularComponent } from './cinepolisangular.component';

describe('CinepolisangularComponent', () => {
  let component: CinepolisangularComponent;
  let fixture: ComponentFixture<CinepolisangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CinepolisangularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinepolisangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
