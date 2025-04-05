import { Component } from '@angular/core';
import { QuestionComponent } from '@quiz/ui/question/question.component';

@Component({
  selector: 'app-quiz',
  imports: [QuestionComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

}
