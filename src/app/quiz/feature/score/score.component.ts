import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { QuizFacade } from '@quiz/data-access/facades/quiz.facade';

@Component({
  selector: 'app-score',
  imports: [RouterModule, CommonModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css',
})
export class ScoreComponent {
  #router = inject(Router);
  #quizFacade = inject(QuizFacade);
  score = this.#quizFacade.quizScore;

  scoreMessage = computed(() => {
    if (this.score() >= 0 && this.score() < 4) {
      return 'You may want to do the quiz again...';
    }

    if (this.score() >= 4 && this.score() < 8) {
      return 'That was a very good effort!';
    }

    return 'Congratulations! Perfect score';
  });

  startQuizAgain() {
    this.#quizFacade.resetQuiz();
    this.#router.navigate(['quiz']);
  }
}
