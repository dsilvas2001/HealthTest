import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SintomasdepresionComponent } from './sintomasdepresion.component';

describe('SintomasdepresionComponent', () => {
  let component: SintomasdepresionComponent;
  let fixture: ComponentFixture<SintomasdepresionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SintomasdepresionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SintomasdepresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
