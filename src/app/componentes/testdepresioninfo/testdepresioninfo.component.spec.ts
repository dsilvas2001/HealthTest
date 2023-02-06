import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdepresioninfoComponent } from './testdepresioninfo.component';

describe('TestdepresioninfoComponent', () => {
  let component: TestdepresioninfoComponent;
  let fixture: ComponentFixture<TestdepresioninfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestdepresioninfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestdepresioninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
