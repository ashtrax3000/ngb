import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { Category } from "../model/category";

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private _serviceURL = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this._serviceURL)
  }
}
