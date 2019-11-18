import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './components/app/app.component';
import { CategoriesComponent } from './components/category/category.component';
import { QuestionsComponent } from './components/question/question.component';
import { TagsComponent } from './components/tag/tag.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.route';

import {
        MatToolbarModule, 
        MatChipsModule, 
        MatCardModule, 
        MatIconModule, 
        MatSidenavModule, 
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule, 
        MatButtonModule,
        MatListModule,
        MatCheckboxModule 
       } from  '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionAddUpdateComponent } from './components/question/question-add-update.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    QuestionsComponent,
    TagsComponent,
    QuestionAddUpdateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
