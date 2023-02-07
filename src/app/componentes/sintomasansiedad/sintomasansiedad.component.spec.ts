import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SintomasansiedadComponent } from './sintomasansiedad.component';

describe('SintomasansiedadComponent', () => {
  let component: SintomasansiedadComponent;
  let fixture: ComponentFixture<SintomasansiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SintomasansiedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SintomasansiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
