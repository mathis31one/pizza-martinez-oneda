import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-formulaire',
  templateUrl: './pizza-formulaire.component.html',
  styleUrls: ['./pizza-formulaire.component.css']
})

export class PizzaFormulaireComponent implements OnInit {
  pizza : Pizza;
  constructor() { 
    this.pizza = new Pizza();
  }

  ngOnInit(): void {
  }
}

class Pizza {
  sauce : string;
  miel: boolean;
  jambon: boolean;
  anchois: boolean;
  magret: boolean;
  
  constructor() {
      this.sauce = "tomate";
      this.miel = false;
      this.jambon = false; 
      this.anchois = false;
      this.magret = false;
  }
  public getprix():number {
      let prix = 0;
       if(this.sauce == "tomate") { prix+=3; }
       if(this.sauce == "creme") { prix+=4; }
       if(this.miel) { prix+=2; }
       if(this.jambon) { prix+=3; }
       if(this.anchois) { prix+=1; }
       if(this.magret) { prix+=3; }
       return prix;
  }
}

