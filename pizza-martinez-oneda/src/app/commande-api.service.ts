import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeApiService {

  constructor(private http: HttpClient) { }

  public commanderPizza(param: string){
    return this.http.get("https://pizzamania-quarkus.ew.r.appspot.com/boutique/commanderPizza/?"+param);
  }
}
