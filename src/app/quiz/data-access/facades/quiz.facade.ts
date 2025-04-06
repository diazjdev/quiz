import { inject, Injectable } from '@angular/core';
import { QuizStore } from '@quiz/data-access/store/quiz.store';

@Injectable({
  providedIn: 'root'
})
export class QuizFacade {

  #quizStore = inject(QuizStore);

  currentQuestion = this.#quizStore.currentQuestion;
  quizScore = this.#quizStore.score;
  answers = this.#quizStore.answers;
  currentQuestionAnswer = this.#quizStore.currentQuestionAnswer;

  constructor() {
    this.#quizStore.loadQuestions();
   }

   answerQuestion(answer:number){
    this.#quizStore.answerQuestion(answer);
   }

   prevQuestion(){
    this.#quizStore.prevQuestion();
   }

   nextQuestion(){
    this.#quizStore.nextQuestion();
   }
}
