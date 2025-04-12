import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { describe, it, vi } from 'vitest';
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

let store: any;
describe('QuizStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: QuizService,
          useValue: quizService,
        },
      ],
    });

    TestBed.inject(QuizService);

    store = TestBed.inject(QuizStore);
  });

  describe('When store is initialised', () => {
    it('The store is available to the application', () => {
      expect(store).toBeTruthy();
    });

    it('Then the questions initial total is 0', () => {
      expect(store.questions().length).toBe(0);
    });

    it('Then the initial score is 0', () => {
      expect(store.score()).toBe(0);
    });
  });

  describe('When the store data load is completed', () => {
    it('Then the number of questions loaded is one', fakeAsync(() => {
      const questionLabel = questions[0].label;
      store.loadQuestions();

      tick();

      expect(store.questions().length).toBe(1);
      expect(store.questions()[0].label).toBe(questionLabel);
    }));
  });

  describe('When user answers and question', () => {
    beforeEach(() => {
      store.loadQuestions();
    });
    describe('And the question is right', () => {
      it('The score increases by one', () => {
        const correctAnswer = questions[0].correctAnswer;
        const newScore = store.score() + 1;
        store.answerQuestion(correctAnswer);
        expect(store.score()).toEqual(newScore);
      });
    });
  });
});
