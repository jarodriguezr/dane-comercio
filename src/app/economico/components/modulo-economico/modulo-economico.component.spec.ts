import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloEconomicoComponent } from './modulo-economico.component';

describe('ModuloEconomicoComponent', () => {
  let component: ModuloEconomicoComponent;
  let fixture: ComponentFixture<ModuloEconomicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloEconomicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloEconomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
