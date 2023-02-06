import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuestresComponent } from './menuestres.component';

describe('MenuestresComponent', () => {
  let component: MenuestresComponent;
  let fixture: ComponentFixture<MenuestresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuestresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuestresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
