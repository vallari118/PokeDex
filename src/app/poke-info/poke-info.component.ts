import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeStructure } from '../model/poke-structure.model';
import { Pokemons } from '../model/pokemons.model';
import { PokeServiceService } from '../poke-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { PokeNames } from '../model/poke-names.model';
import { PokeDataService } from '../poke-data.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})
export class PokeInfoComponent implements OnInit {

  isSearchClicked: boolean = false;
  id: String;
  nameOrType: String = "";
  pokeData: Pokemons = new Pokemons();
  pokeNames: PokeNames = new PokeNames();
  pokeDataArr: Pokemons[] = [];
  errors: String[] = [];
  filteredOptions: Observable<any[]>;
  myControl = new FormControl();

  constructor(private router: Router, private pokeService: PokeServiceService,
    private spinner: NgxSpinnerService, public pokeDataService: PokeDataService) { }


  getPokeInfo(id: String) {
    this.pokeDataArr = [];
    if (id === "type") {
      this.router.navigate(['/pokedex/type', this.nameOrType]);
      // this.getPokemonTypes(this.nameOrType);
    } else if (id === "name") {
      // this.getPokemonDetails(this.nameOrType);
      this.router.navigate(['/pokedex/pokemon', this.nameOrType]);
    }
  }
  getPokemonTypes(type: String) {
    this.spinner.show();
    this.pokeDataService.getPokemonTypes(type).then((res) => {
      this.spinner.hide();
      console.log(res);
    });
  }

  getEventId(event) {
    this.isSearchClicked = true;
    this.id = event.currentTarget.id;
  }

  getPokemonDetails(name: String) {
    this.spinner.show();
    this.pokeDataService.getPokemonDetails(name).then((res) => {
      console.log(res);
      this.spinner.hide();
    });

  }

  getBack() {
    this.isSearchClicked = false;
    this.nameOrType = '';
    this.pokeDataService.pokeDataArr = [];
    this.pokeDataService.pokeNames = new PokeNames();
    this.pokeDataService.errors = [];
  }

  ngOnInit(): void {
    this.isSearchClicked = false;
    this.pokeDataService.getAllPokemonNames("pokemon").then((res) => {
      console.log(res);
     
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
      

    });

  }

  
  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    console.log("Value -->", filterValue);
    console.log("Name- ->", this.pokeDataService.pokemonNames.filter(op => op.name));
    return this.pokeDataService.pokemonNames.filter((op) => op.name.toLowerCase().includes(value.toLowerCase()));
  }

}
