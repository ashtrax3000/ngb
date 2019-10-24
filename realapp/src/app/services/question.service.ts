import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators'
import { Question } from '../model/question';
import { Category } from '../model/category';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  private _serviceURL = 'http://localhost:3000/questions';

  constructor( private http: HttpClient, private categoryService: CategoryService ) { }

  getQuestions(): Observable<Question[]> {

    let url = this._serviceURL;

    const res1 = this.http.get<Question[]>(this._serviceURL);
    const res2 = this.categoryService.getCategories();
    
    return forkJoin([res1, res2]).pipe(
      map((combined, index) => {
            let questions: Question[] = combined[0];
            let categories: Category[] = combined[1];
            
            questions.forEach(ques => {
              ques.categories = [];
              ques.categoryIds.forEach(id => ques.categories.push(categories.find(element => element.id == id)))
            })
            return questions;
          }
        
      ))
      
  }
}
