import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanospacienteComponent } from './contactanospaciente.component';

describe('ContactanospacienteComponent', () => {
  let component: ContactanospacienteComponent;
  let fixture: ComponentFixture<ContactanospacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactanospacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactanospacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
