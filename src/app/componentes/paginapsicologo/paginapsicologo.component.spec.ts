import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginapsicologoComponent } from './paginapsicologo.component';

describe('PaginapsicologoComponent', () => {
  let component: PaginapsicologoComponent;
  let fixture: ComponentFixture<PaginapsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginapsicologoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginapsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
