import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstressintomasComponent } from './estressintomas.component';

describe('EstressintomasComponent', () => {
  let component: EstressintomasComponent;
  let fixture: ComponentFixture<EstressintomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstressintomasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstressintomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
