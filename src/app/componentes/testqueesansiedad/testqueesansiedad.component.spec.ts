import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestqueesansiedadComponent } from './testqueesansiedad.component';

describe('TestqueesansiedadComponent', () => {
  let component: TestqueesansiedadComponent;
  let fixture: ComponentFixture<TestqueesansiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestqueesansiedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestqueesansiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
