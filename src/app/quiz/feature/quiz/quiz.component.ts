import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { QuizFacade } from '@quiz/data-access/facades/quiz.facade';
import { QuizStore } from '@quiz/data-access/store/quiz.store';
import { QuestionComponent } from '@quiz/ui/question/question.component';

@Component({
  selector: 'app-quiz',
  imports: [QuestionComponent, CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  #questionFacade = inject(QuizFacade);

  currentQuestion = this.#questionFacade.currentQuestion;
  quizScore = this.#questionFacade.quizScore;
  answers = this.#questionFacade.answers;

  onAnswerQuestion(answer:number){
    console.log({answer});
    this.#questionFacade.answerQuestion(answer);
    
  }

  prevQuestion(){
    this.#questionFacade.prevQuestion();
  }

  nextQuestion(){
    this.#questionFacade.nextQuestion();
  }

}
