import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasuserComponent } from './estadisticasuser.component';

describe('EstadisticasuserComponent', () => {
  let component: EstadisticasuserComponent;
  let fixture: ComponentFixture<EstadisticasuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticasuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticasuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
