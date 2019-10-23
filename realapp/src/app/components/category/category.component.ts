import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoriesComponent implements OnInit, OnDestroy {

  categories: Category[];
  sub:any;

  constructor(private _categoryService: CategoryService) { }

  ngOnInit() {
    this.sub = this._categoryService.getCategories()
        .subscribe(res => this.categories = res);
  }
  
  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }

}
