import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudepresionComponent } from './menudepresion.component';

describe('MenudepresionComponent', () => {
  let component: MenudepresionComponent;
  let fixture: ComponentFixture<MenudepresionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenudepresionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenudepresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
