import { TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';
import { QuizService } from '../services/quiz.service';
import { QuizStore } from '../store/quiz.store';
import { QuizFacade } from './quiz.facade';

describe('QuizFacade', () => {
  let service: QuizFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockProvider(QuizService),
        MockProvider(QuizStore, { loadQuestions: () => {} }),
      ],
    });

    service = TestBed.inject(QuizFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
