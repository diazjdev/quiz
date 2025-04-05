import { TestBed } from '@angular/core/testing';

import { QuizFacade } from './quiz.facade';

describe('QuizFacade', () => {
  let service: QuizFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
