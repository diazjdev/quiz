import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Question } from '@quiz/data-access/quiz.models';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  getQuestions(){
    return of([
      {
          label: "What is the capital of France?",
          answers: ["London", "Paris", "Berlin", "Madrid"],
          correctAnswer: 1
      },
      {
          label: "Which planet is known as the 'Red Planet'?",
          answers: ["Earth", "Mars", "Jupiter", "Venus"],
          correctAnswer: 1
      },
      {
          label: "What is the largest mammal on Earth?",
          answers: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
          correctAnswer: 1
      },
      {
          label: "In which year did the Titanic sink?",
          answers: ["1912", "1905", "1920", "1931"],
          correctAnswer: 0
      },
      {
          label: "Who painted the Mona Lisa?",
          answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
          correctAnswer: 2
      },
      {
          label: "What is the chemical symbol for gold?",
          answers: ["Ag", "Au", "Fe", "Cu"],
          correctAnswer: 1
      }
  ]);

  }
}



