import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Question } from '@quiz/data-access/quiz.models';

@Component({
  selector: 'app-question',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent implements OnInit {
  @Output() answerQuestion = new EventEmitter<number>();

  question = input<Question | null>(null);
  selectedAnswer = input<number>(-1);

  questionForm = new FormGroup({
    question: new FormControl<number>(-1),
  });

  ngOnInit() {
    this.questionForm.valueChanges.subscribe(({ question }) => {
      this.onAnswerQuestion(question!);
    });
  }

  onAnswerQuestion(answerIndex: number) {
    this.answerQuestion.emit(answerIndex);
  }
}
