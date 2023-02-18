import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaclientesComponent } from './paginaclientes.component';

describe('PaginaclientesComponent', () => {
  let component: PaginaclientesComponent;
  let fixture: ComponentFixture<PaginaclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaclientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
