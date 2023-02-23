import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpacienteperfilComponent } from './editarpacienteperfil.component';

describe('EditarpacienteperfilComponent', () => {
  let component: EditarpacienteperfilComponent;
  let fixture: ComponentFixture<EditarpacienteperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarpacienteperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarpacienteperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
