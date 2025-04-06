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
    patchState(store, ()=>({ activeQuestion:store.activeQuestion()+1}))
  },
  prevQuestion:()=> {
    patchState(store, ()=>({ activeQuestion:store.activeQuestion()-1}))
  },
  answerQuestion:(answer:number)=>{
    if(store.answers()?.length === store.activeQuestion()){
      const answers:Array<number>=store.answers().splice(store.activeQuestion(),1,answer);
      patchState(store, { answers });
    }
    
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
  isNavigateEnabled:computed(()=> store.answers()?.length === store.activeQuestion() + 1),
  isPrev:computed(()=> store.activeQuestion() > 0),
  isNext:computed(()=> store.activeQuestion()  < store.questions()?.length -1),
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

