import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginapsicologovisualizarpacienteComponent } from './paginapsicologovisualizarpaciente.component';

describe('PaginapsicologovisualizarpacienteComponent', () => {
  let component: PaginapsicologovisualizarpacienteComponent;
  let fixture: ComponentFixture<PaginapsicologovisualizarpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginapsicologovisualizarpacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginapsicologovisualizarpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
