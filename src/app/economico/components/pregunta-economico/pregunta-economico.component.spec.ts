import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaEconomicoComponent } from './pregunta-economico.component';

describe('PreguntaEconomicoComponent', () => {
  let component: PreguntaEconomicoComponent;
  let fixture: ComponentFixture<PreguntaEconomicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaEconomicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaEconomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
