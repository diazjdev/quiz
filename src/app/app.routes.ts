import { Routes } from '@angular/router';

export const routes: Routes = [
    { path:'', pathMatch:'full', redirectTo:'quiz'},
    { path:'quiz',  loadComponent:()=>import('@quiz/feature/quiz/quiz.component').then(c=>c.QuizComponent)},
    { path:'score',  loadComponent:()=>import('@quiz/feature/score/score.component').then(c=>c.ScoreComponent)},

];
