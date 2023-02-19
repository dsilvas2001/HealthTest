import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraradminComponent } from './mostraradmin.component';

describe('MostraradminComponent', () => {
  let component: MostraradminComponent;
  let fixture: ComponentFixture<MostraradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraradminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostraradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
