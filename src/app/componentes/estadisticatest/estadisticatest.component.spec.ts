import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticatestComponent } from './estadisticatest.component';

describe('EstadisticatestComponent', () => {
  let component: EstadisticatestComponent;
  let fixture: ComponentFixture<EstadisticatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
