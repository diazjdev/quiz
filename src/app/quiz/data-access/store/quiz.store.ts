import { signalStore, withState } from '@ngrx/signals';
import { QuizState } from '@quiz/data-access/quiz.models';



const initialState: QuizState = {
  questions:[],
  activeQuestion: -1
};

export const QuizStore = signalStore(withState(initialState));

