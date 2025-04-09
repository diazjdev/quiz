import { Component, inject } from '@angular/core';
import { QuizStore } from '@quiz/data-access/store/quiz.store';

@Component({
  selector: 'app-score',
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {
  #quizStore = inject(QuizStore);

  score = this.#quizStore.score;

}
