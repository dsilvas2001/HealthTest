import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestqueesestresComponent } from './testqueesestres.component';

describe('TestqueesestresComponent', () => {
  let component: TestqueesestresComponent;
  let fixture: ComponentFixture<TestqueesestresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestqueesestresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestqueesestresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
