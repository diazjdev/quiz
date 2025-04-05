import { Component, input } from '@angular/core';
import { Question } from '@quiz/data-access/quiz.models';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  question = input<Question | null>(null)

}
