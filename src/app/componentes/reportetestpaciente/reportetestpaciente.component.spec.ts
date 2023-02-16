import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportetestpacienteComponent } from './reportetestpaciente.component';

describe('ReportetestpacienteComponent', () => {
  let component: ReportetestpacienteComponent;
  let fixture: ComponentFixture<ReportetestpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportetestpacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportetestpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
