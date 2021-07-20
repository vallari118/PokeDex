import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  private url = 'http://localhost:8080/pokedex';

  constructor(private http: HttpClient) {

  }

  getPokemonInfo(name: String, headers: any): Observable<any> {
    return this.http.get(`${this.url}/${name}`);
  }

  getAllPokemonWithType(name: String, headers: any): Observable<any> {
    return this.http.get(`${this.url}/${name}`);
  }

  getAllPokemonNames(extUrl: String, headers: any): Observable<any> {
    return this.http.get(`${this.url}/${extUrl}`);
  }

}
