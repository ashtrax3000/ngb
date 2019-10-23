import { Routes } from "@angular/router";
import { CategoriesComponent } from './components/category/category.component';
import { TagsComponent } from './components/tag/tag.component';
import { QuestionsComponent } from './components/question/question.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/categories',
        pathMatch: 'full'
    },
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'tags',
        component: TagsComponent
    },
    {
        path: 'questions',
        component: QuestionsComponent
    }
]