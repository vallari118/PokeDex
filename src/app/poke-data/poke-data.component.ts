import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeNames } from '../model/poke-names.model';
import { Pokemons } from '../model/pokemons.model';
import { PokeDataService } from '../poke-data.service';
import { NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-poke-data',
  templateUrl: './poke-data.component.html',
  styleUrls: ['./poke-data.component.css']
})
export class PokeDataComponent implements OnInit {
  @Input() pokeDataArr: Pokemons[];
  @Input() pokeNames: PokeNames;
  checkedMoreDetails: boolean;
  

  constructor(public pokeDataService: PokeDataService,
    public activatedRoute: ActivatedRoute  , private router: ActivatedRoute, 
    private spinner: NgxSpinnerService) { }

   

  ngOnInit(): void {
    this.spinner.show();
    this.checkedMoreDetails=false;
    this.activatedRoute.params.subscribe(param => {  
      // tslint:disable-next-line: no-string-literal  
      this.getPokemonInfo(param['name']);  
      }); 

  }



  ngOnChanges() {
    /**********THIS FUNCTION WILL TRIGGER WHEN PARENT COMPONENT UPDATES 'someInput'**************/
    //Write your code here
    //  console.log(this.pokeNames);
    console.log(this.pokeDataArr);
    this.checkedMoreDetails = false;
  }

  getPokemonInfo(name: String) {
    // this.pokeNames= new PokeNames();
    this.pokeDataService.getPokemonDetails(name).then((res)=> {
      this.spinner.hide();
      console.log(this.pokeDataService.pokeDataArr[0]);
      console.log("Poke Data component -->", res);
    })
  }

  getMoreDetails() {
    this.checkedMoreDetails = true;
  }

}
