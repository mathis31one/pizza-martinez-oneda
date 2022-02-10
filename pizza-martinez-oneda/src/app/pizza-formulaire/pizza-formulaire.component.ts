import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeApiService } from '../commande-api.service';

@Component({
  selector: 'app-pizza-formulaire',
  templateUrl: './pizza-formulaire.component.html',
  styleUrls: ['./pizza-formulaire.component.css']
})

export class PizzaFormulaireComponent implements OnInit {
  pizza : Pizza;
  isLoading : boolean = false;

  constructor(private commandeApi: CommandeApiService,private router: Router) { 
    this.pizza = new Pizza();
  }

  ngOnInit(): void {
  }

  goToResume(){
    this.router.navigate(['/resume']);
  }

  goToAccueil(){
    this.router.navigate(['/']);
  }

  isValide():boolean{
    if(this.pizza.miel ||this.pizza.jambon || this.pizza.anchois || this.pizza.magret){return true}
    return false
  }

  


  commander(){
    this.isLoading = true;
    window.localStorage.setItem('pizza', JSON.stringify(this.pizza));
    let pizzaString  = window.localStorage.getItem('pizza');

    
    this.commandeApi.commanderPizza("tot").subscribe(
      (res) => { this.onCommandeSuccess(res)}, 
      (error) => { this.onCommandeError(error)}
    )
  }

  private onCommandeSuccess(res: object){
    this.isLoading = false;
  }


  private onCommandeError(err:HttpErrorResponse){
    this.isLoading = false;
    
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

