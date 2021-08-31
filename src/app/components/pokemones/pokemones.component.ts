import { Component, OnInit } from '@angular/core';
import { ApipokemonService } from './../../services/apipokemon.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.scss']
})
export class PokemonesComponent implements OnInit {

  constructor( private _apipokemonServices:ApipokemonService ) { }
  id: string = '';
  name: string = '';
  namePokemon: string = '';
  imagenPokemonFront: string = '';
  imagenPokemonBack: string = '';
  imagenPokemonFrontB: string = '';
  imagenPokemonBackB: string = '';


  ngOnInit(): void {
  }

  getSearchPokemon(){
    this._apipokemonServices.getPokemon( this.name ).subscribe( (data:any)  => {
      console.log( data );
      this.id = data.id;
      this.namePokemon = data.name;
      this.imagenPokemonFront = data.sprites.front_default;
      this.imagenPokemonBack = data.sprites.back_default;
      this.imagenPokemonFrontB = data.sprites.front_shiny;
      this.imagenPokemonBackB = data.sprites.back_shiny;

    });
  }

}
