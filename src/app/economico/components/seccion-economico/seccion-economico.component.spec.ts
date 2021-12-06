import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionEconomicoComponent } from './seccion-economico.component';

describe('SeccionEconomicoComponent', () => {
  let component: SeccionEconomicoComponent;
  let fixture: ComponentFixture<SeccionEconomicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionEconomicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionEconomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
