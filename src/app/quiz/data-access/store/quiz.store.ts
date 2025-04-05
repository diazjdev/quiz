import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Question, QuizState } from '@quiz/data-access/quiz.models';
import { QuizService } from '../services/quiz.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, pipe, switchMap, tap } from 'rxjs';



const initialState: QuizState = {
  questions:[],
  activeQuestion: 0,
  answers:[]
};

export const QuizStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
withMethods((store, quizService = inject(QuizService))=>({
  nextQuestion:()=> {
    patchState(store, (state)=>({ activeQuestion:store.activeQuestion()+1}))
  },
  prevQuestion:()=> {
    patchState(store, (state)=>({ activeQuestion:store.activeQuestion()-1}))
  },
  loadQuestions:rxMethod<void>(
    pipe(
      switchMap(()=> quizService.getQuestions().pipe(
        tap((questions:Array<Question>) =>{
          patchState(store,{questions});
        })
      ))
    )

  )
})
),
withComputed((store)=>({
  currentQuestion:computed(()=>  store.questions().find((q,index)=> index===store.activeQuestion() ? q : null)),
  score:computed(()=> {
    let score = 0;

    store.answers().forEach((answer, index)=>{
      if(store.questions()[index].correctAnswer===answer){
        score ++;
      }

    })
    return score;
  } )
})));

