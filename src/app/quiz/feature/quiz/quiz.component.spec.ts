import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Question } from '@quiz/data-access/quiz.models';
import { fireEvent, render, screen, waitFor } from '@testing-library/angular';
import { describe } from 'vitest';
import { QuizComponent } from './quiz.component';

const quizQuestion: Question = {
  label: 'Which language is primarily spoken in Brazil?',
  answers: ['Spanish', 'Portuguese', 'French', 'Italian'],
  correctAnswer: 1,
};

const quizQuestions = [
  quizQuestion,
  {
    ...quizQuestion,
    correctAnswer: 1,
    label: 'Which language is spoken in Angola',
  },
];

describe('QuizComponent', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await render(QuizComponent, {
      imports: [],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
  it('Component is rendered', async () => {
    const req = httpTestingController.expectOne('/data/quiz.json');
    req.flush([quizQuestion]);

    await waitFor(() => {
      const question = screen.getByRole('paragraph');

      expect(question).toBeTruthy();
      expect(question.textContent).toContain(quizQuestion.label);
    });
  });

  it('Button prev is disabled', async () => {
    const req = httpTestingController.expectOne('/data/quiz.json');
    req.flush([quizQuestion]);

    await waitFor(() => {
      const prevButton = screen.getByRole('button', {
        name: 'Prev',
      }) as HTMLButtonElement;

      expect(prevButton.disabled).toBeTruthy();
    });
  });

  it('Button Prev is enabled if button next is clicked', async () => {
    const req = httpTestingController.expectOne('/data/quiz.json');
    req.flush([...quizQuestions]);

    await waitFor(() => {
      const prevButton = screen.getByRole('button', {
        name: 'Prev',
      }) as HTMLButtonElement;

      const nextButton = screen.getByRole('button', {
        name: 'Next',
      }) as HTMLButtonElement;

      fireEvent.click(nextButton);

      expect(prevButton.disabled).toBeFalsy();
    });
  });
});
