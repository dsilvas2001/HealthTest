import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreveniransiedadComponent } from './preveniransiedad.component';

describe('PreveniransiedadComponent', () => {
  let component: PreveniransiedadComponent;
  let fixture: ComponentFixture<PreveniransiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreveniransiedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreveniransiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
