import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { describe, vi } from 'vitest';
import { QuizService } from '../services/quiz.service';
import { QuizStore } from './quiz.store';

const questions = [
  {
    label: 'What is the capital of France?',
    answers: ['London', 'Paris', 'Berlin', 'Madrid'],
    correctAnswer: 1,
  },
];

let quizService = {
  getQuestions: vi.fn(() => of(questions)),
};

const setUp = () =>
  TestBed.configureTestingModule({
    providers: [
      {
        provide: QuizService,
        useValue: quizService,
      },
    ],
  });

describe('QuizStore', () => {
  describe('When store is initialised', () => {
    it('The store is available to the application', () => {
      setUp();
      const store = TestBed.inject(QuizStore);
      expect(store).toBeTruthy();
    });

    it('Then the questions initial total is 0', () => {
      const store = TestBed.inject(QuizStore);
      expect(store.questions().length).toBe(0);
    });

    it('Then the initial score is 0', () => {
      const store = TestBed.inject(QuizStore);
      expect(store.score()).toBe(0);
    });
  });

  describe('When the store data load is completed', () => {
    it('Then the number of questions loaded is one', fakeAsync(() => {
      const questionLabel = questions[0].label;
      setUp();
      const store = TestBed.inject(QuizStore);
      store.loadQuestions();

      tick();

      expect(store.questions().length).toBe(1);
      expect(store.questions()[0].label).toBe(questionLabel);
    }));
  });
});
