import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { PokeDataService } from '../poke-data.service';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-poke-type',
  templateUrl: './poke-type.component.html',
  styleUrls: ['./poke-type.component.css']
})

export class PokeTypeComponent implements OnInit {
  myControl = new FormControl();
  pokenamesArray: any[];
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<any[]>;

  constructor(public pokeDataService: PokeDataService,
    public activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.activatedRoute.params.subscribe(param => {
      this.getPokemonTypeInfo(param['type']);
    });

  }

  getPokemonTypeInfo(type: String) {
    this.spinner.show();
    this.pokeDataService.getPokemonTypes(type).then((res) => {
      this.spinner.hide();
      console.log(this.pokeDataService.pokeNames);
      this.pokenamesArray = new Array(this.pokeDataService.pokeNames);
      console.log("Poke Data component -->", res);

    });
  }

}
