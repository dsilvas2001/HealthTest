import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarperfilpacienteComponent } from './editarperfilpaciente.component';

describe('EditarperfilpacienteComponent', () => {
  let component: EditarperfilpacienteComponent;
  let fixture: ComponentFixture<EditarperfilpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarperfilpacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarperfilpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
