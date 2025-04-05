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
  @Output() answerQuestion = new EventEmitter<number>();

  selectedAnswer = signal(-1);

  onAnswerQuestion(answerIndex:number){
    this.answerQuestion.emit(answerIndex);
    this.selectedAnswer.set(answerIndex)
  }

}
