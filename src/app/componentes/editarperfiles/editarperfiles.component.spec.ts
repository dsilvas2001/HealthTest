import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarperfilesComponent } from './editarperfiles.component';

describe('EditarperfilesComponent', () => {
  let component: EditarperfilesComponent;
  let fixture: ComponentFixture<EditarperfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarperfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarperfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
