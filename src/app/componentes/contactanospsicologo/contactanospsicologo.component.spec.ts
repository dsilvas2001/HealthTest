import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanospsicologoComponent } from './contactanospsicologo.component';

describe('ContactanospsicologoComponent', () => {
  let component: ContactanospsicologoComponent;
  let fixture: ComponentFixture<ContactanospsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactanospsicologoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactanospsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
