import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsdepresionComponent } from './blogsdepresion.component';

describe('BlogsdepresionComponent', () => {
  let component: BlogsdepresionComponent;
  let fixture: ComponentFixture<BlogsdepresionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsdepresionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsdepresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
