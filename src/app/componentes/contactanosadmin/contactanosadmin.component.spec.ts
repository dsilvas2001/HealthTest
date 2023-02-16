import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanosadminComponent } from './contactanosadmin.component';

describe('ContactanosadminComponent', () => {
  let component: ContactanosadminComponent;
  let fixture: ComponentFixture<ContactanosadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactanosadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactanosadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
