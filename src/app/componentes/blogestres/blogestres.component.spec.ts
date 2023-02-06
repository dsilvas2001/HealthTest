import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogestresComponent } from './blogestres.component';

describe('BlogestresComponent', () => {
  let component: BlogestresComponent;
  let fixture: ComponentFixture<BlogestresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogestresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogestresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
