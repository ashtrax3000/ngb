import { Routes } from "@angular/router";
import { CategoriesComponent } from './components/category/category.component';
import { TagsComponent } from './components/tag/tag.component';
import { QuestionsComponent } from './components/question/question.component';
import { QuestionAddUpdateComponent } from './components/question/question-add-update.component';

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
    },
    {
        path: 'question/add',
        component: QuestionAddUpdateComponent
    }
]