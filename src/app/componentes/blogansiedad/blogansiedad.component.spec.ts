import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogansiedadComponent } from './blogansiedad.component';

describe('BlogansiedadComponent', () => {
  let component: BlogansiedadComponent;
  let fixture: ComponentFixture<BlogansiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogansiedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogansiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
