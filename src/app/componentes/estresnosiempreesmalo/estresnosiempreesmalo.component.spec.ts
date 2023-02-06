import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstresnosiempreesmaloComponent } from './estresnosiempreesmalo.component';

describe('EstresnosiempreesmaloComponent', () => {
  let component: EstresnosiempreesmaloComponent;
  let fixture: ComponentFixture<EstresnosiempreesmaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstresnosiempreesmaloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstresnosiempreesmaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
