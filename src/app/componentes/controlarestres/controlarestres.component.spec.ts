import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlarestresComponent } from './controlarestres.component';

describe('ControlarestresComponent', () => {
  let component: ControlarestresComponent;
  let fixture: ComponentFixture<ControlarestresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlarestresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlarestresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
