import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, filter } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get('assets/data/people.json');
  }

  search(q: string): Observable<any> {
    if(!q || q ==='*') 
      q = '';
    else
      q = q.toLowerCase();

    return this.getAll().pipe(
      map( (data:any) => data
          .map( item => !!localStorage['person' + item.id] ? JSON.parse(localStorage['perosn' + item.id]) : item )
          .filter( item => JSON.stringify(item).toLowerCase().includes(q) )
    ));
  }

  get(id: number) {
    return this.getAll().pipe(
      map( (data:any) => {
        if(localStorage['person' + id]) 
          return JSON.parse(localStorage['person' + id])
        return data.find( e => e.id === id)
      })
    )
  }

  save(person: Person) {
    localStorage['person' + person.id] = JSON.stringify(person);
  }

}

export class Address {
  street: string;
  city: string;
  state: string;
  zip: string;

  constructor(obj?: any) {
    this.street = obj && obj.street || null;
    this.city = obj && obj.city || null;
    this.state = obj && obj.state || null;
    this.zip = obj && obj.zip || null;
  }
}
export class Person {
  id: number;
  name: string;
  phone: string;
  address: Address;

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.name = obj && obj.name || null;
    this.phone = obj && obj.phone || null;
    this.address = obj && obj.address || null;
  }
}