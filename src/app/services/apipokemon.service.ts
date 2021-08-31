import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApipokemonService {

  private url: string = "https://pokeapi.co/api/v2/pokemon";

  constructor( private http:HttpClient ) { }

  getPokemon(name:string){
    return this.http.get(`${this.url}/${name}`)
  }
}
