import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeDataComponent } from './poke-data/poke-data.component';
import { PokeInfoComponent } from './poke-info/poke-info.component';
import { PokeTypeComponent } from './poke-type/poke-type.component';


const routes: Routes = [
  {
  path : "",
  redirectTo : "/pokedex",
  pathMatch : "full"
},
{
  path : "pokedex",
  component : PokeInfoComponent
},
{
  path : "pokedex/pokemon/:name",
  component : PokeDataComponent
},
{
  path : "pokedex/type/:type",
  component : PokeTypeComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
