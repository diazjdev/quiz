import { Routes } from '@angular/router';

export const routes: Routes = [
    { path:'', pathMatch:'full', redirectTo:'quiz'},
    { path:'',  loadComponent:()=>import('@quiz/feature/quiz/quiz.component').then(c=>c.QuizComponent)},
];
