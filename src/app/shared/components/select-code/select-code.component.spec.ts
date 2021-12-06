import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCodeComponent } from './select-code.component';

describe('SelectCodeComponent', () => {
  let component: SelectCodeComponent;
  let fixture: ComponentFixture<SelectCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
