import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Names } from './model/names.model';

import { PokeNames } from './model/poke-names.model';
import { Pokemons } from './model/pokemons.model';
import { PokeServiceService } from './poke-service.service';

@Injectable({
  providedIn: 'root'
})
export class PokeDataService {
  errors: String[] = [];
  pokeData: Pokemons = new Pokemons();
  pokeNames: PokeNames = new PokeNames();
  pokeDataArr: Pokemons[] = [];
  pokemonNames: Names[]= [];

  constructor(private router: Router, private pokeService: PokeServiceService) { }

  getPokemonDetails(name: String) {
    return new Promise((resolve, reject) => {
      this.errors = [];
      this.pokeNames = new PokeNames();


      let headers = new HttpHeaders();
      headers.set('content-type', 'application/json')
      headers.set('Access-Control-Allow-Origin', '*')
      headers.set('Host', 'PokeDex')
      this.pokeService.getPokemonInfo("pokemon/" + name, headers).subscribe(data => {
        if (data.responseStatuses.responseMessage === "SUCCESS") {
          this.pokeData = data.pokemons;
          this.pokeDataArr = new Array(this.pokeData);
          resolve("SUCCESS");
          // this.spinner.hide();
        } else {
          // this.spinner.hide();
          resolve("FAILURE");
          this.errors.push("Oops! Something went wrong :( .Please try with different pokemon");
        }
        console.log(data);
      });

    })
    // this.spinner.show();

  }

  getPokemonTypes(type: String) {
    return new Promise((resolve, reject) => {
      this.errors = [];
      let headers = new HttpHeaders();
      headers.set('content-type', 'application/json')
      headers.set('Access-Control-Allow-Origin', '*')
      headers.set('Host', 'PokeDex')
      this.pokeService.getPokemonInfo("type/" + type, headers).subscribe(data => {

        if (data.responseStatuses.responseMessage === "SUCCESS") {
          this.pokeNames = data.pokeType.pokeNames;
          resolve("SUCCESS");
          // this.spinner.hide();
        }
        else {
          // this.spinner.hide();
          resolve("FAILURE");
          this.errors.push("Oops! Something went wrong :( .Please try with different type")
        }
        console.log(data);
      });

    })
    // this.spinner.show();


  }

  getAllPokemonNames(extUrl: String){
   
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.set('content-type', 'application/json')
      headers.set('Access-Control-Allow-Origin', '*')
      headers.set('Host', 'PokeDex')
      this.pokeService.getAllPokemonNames(extUrl, headers).subscribe(data => {
        if(data!=null){
          resolve(data);
          this.pokemonNames = data;
        }
      });
    });
  }
}
