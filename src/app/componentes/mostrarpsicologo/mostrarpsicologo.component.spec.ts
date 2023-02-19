import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarpsicologoComponent } from './mostrarpsicologo.component';

describe('MostrarpsicologoComponent', () => {
  let component: MostrarpsicologoComponent;
  let fixture: ComponentFixture<MostrarpsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarpsicologoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarpsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
