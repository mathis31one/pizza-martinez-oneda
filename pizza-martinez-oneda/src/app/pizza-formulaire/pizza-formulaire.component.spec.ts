import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaFormulaireComponent } from './pizza-formulaire.component';

describe('PizzaFormulaireComponent', () => {
  let component: PizzaFormulaireComponent;
  let fixture: ComponentFixture<PizzaFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaFormulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
