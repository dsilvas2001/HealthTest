import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuansiedadComponent } from './menuansiedad.component';

describe('MenuansiedadComponent', () => {
  let component: MenuansiedadComponent;
  let fixture: ComponentFixture<MenuansiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuansiedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuansiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
