import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueesdepresionComponent } from './queesdepresion.component';

describe('QueesdepresionComponent', () => {
  let component: QueesdepresionComponent;
  let fixture: ComponentFixture<QueesdepresionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueesdepresionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueesdepresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
