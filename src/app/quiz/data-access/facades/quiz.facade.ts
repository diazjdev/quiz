import { inject, Injectable } from '@angular/core';
import { QuizStore } from '@quiz/data-access/store/quiz.store';

@Injectable({
  providedIn: 'root'
})
export class QuizFacade {

  #quizStore = inject(QuizStore);

  currentQuestion = this.#quizStore.currentQuestion;

  constructor() {
    this.#quizStore.loadQuestions();
   }
}
