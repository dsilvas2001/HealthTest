import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestansiedadinfoComponent } from './testansiedadinfo.component';

describe('TestansiedadinfoComponent', () => {
  let component: TestansiedadinfoComponent;
  let fixture: ComponentFixture<TestansiedadinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestansiedadinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestansiedadinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
