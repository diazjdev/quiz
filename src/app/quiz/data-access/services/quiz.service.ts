import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../quiz.models';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  #http = inject(HttpClient);

  getQuestions(): Observable<Array<Question>> {
    return this.#http.get<Array<Question>>('/data/quiz.json');
  }
}
