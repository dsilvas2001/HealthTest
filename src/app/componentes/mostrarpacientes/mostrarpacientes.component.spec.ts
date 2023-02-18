import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarpacientesComponent } from './mostrarpacientes.component';

describe('MostrarpacientesComponent', () => {
  let component: MostrarpacientesComponent;
  let fixture: ComponentFixture<MostrarpacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarpacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarpacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
