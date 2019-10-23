import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { CategoryComponent } from './components/category/category.component';
import { QuestionComponent } from './components/question/question.component';
import { TagComponent } from './components/tag/tag.component';
import { CategoryService } from './services/category.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    QuestionComponent,
    TagComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
