import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeComponentComponent } from './commande-component.component';

describe('CommandeComponentComponent', () => {
  let component: CommandeComponentComponent;
  let fixture: ComponentFixture<CommandeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
