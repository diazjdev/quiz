export interface Question{
    label:string;
    answers:Array<string>;
    correctAnswer:number;

}

export interface QuizState{
    questions:Array<Question>;
    activeQuestion:number;
    answers:{[question:number]:number}
}

