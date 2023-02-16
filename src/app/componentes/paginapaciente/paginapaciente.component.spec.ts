import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginapacienteComponent } from './paginapaciente.component';

describe('PaginapacienteComponent', () => {
  let component: PaginapacienteComponent;
  let fixture: ComponentFixture<PaginapacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginapacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginapacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
