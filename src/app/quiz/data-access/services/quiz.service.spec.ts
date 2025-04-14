import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Question } from '../quiz.models';
import { QuizService } from './quiz.service';

describe('QuizService', () => {
  let service: QuizService;
  let httpTestingController: HttpTestingController;

  const mockQuestions: Question[] = [
    {
      label: 'What is the capital of France?',
      answers: ['Paris', 'London', 'Rome', 'Berlin'],
      correctAnswer: 1,
    },
    {
      label: 'What is 2 + 2?',
      answers: ['3', '4', '5', '6'],
      correctAnswer: 2,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [QuizService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(QuizService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify that there are no outstanding HTTP requests
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch quiz questions from /data/quiz.json', () => {
    service.getQuestions().subscribe((questions) => {
      expect(questions).toEqual(mockQuestions);
    });

    const req = httpTestingController.expectOne('/data/quiz.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockQuestions);
  });
});
