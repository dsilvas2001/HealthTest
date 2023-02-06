import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestestresinfoComponent } from './testestresinfo.component';

describe('TestestresinfoComponent', () => {
  let component: TestestresinfoComponent;
  let fixture: ComponentFixture<TestestresinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestestresinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestestresinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
