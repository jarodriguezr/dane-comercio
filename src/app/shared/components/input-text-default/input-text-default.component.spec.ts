import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextDefaultComponent } from './input-text-default.component';

describe('InputTextDefaultComponent', () => {
  let component: InputTextDefaultComponent;
  let fixture: ComponentFixture<InputTextDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTextDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
