import { inject, Injectable } from '@angular/core';
import { QuizStore } from '@quiz/data-access/store/quiz.store';

@Injectable({
  providedIn: 'root'
})
export class QuizFacade {

  #quizStore = inject(QuizStore);

  activeQuestion = this.#quizStore.activeQuestion;

  constructor() { }
}
