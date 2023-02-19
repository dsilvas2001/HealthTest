import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfisueserComponent } from './perfisueser.component';

describe('PerfisueserComponent', () => {
  let component: PerfisueserComponent;
  let fixture: ComponentFixture<PerfisueserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfisueserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfisueserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
