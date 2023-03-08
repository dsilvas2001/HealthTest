import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilpsicologoComponent } from './perfilpsicologo.component';

describe('PerfilpsicologoComponent', () => {
  let component: PerfilpsicologoComponent;
  let fixture: ComponentFixture<PerfilpsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilpsicologoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilpsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
