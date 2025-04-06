import { Component, EventEmitter, input, Output, signal } from '@angular/core';
import { Question } from '@quiz/data-access/quiz.models';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  question = input<Question | null>(null);
  selectedAnswer = input<number>(-1);
  @Output() answerQuestion = new EventEmitter<number>();


  onAnswerQuestion(answerIndex:number){
    this.answerQuestion.emit(answerIndex);
  }

}
