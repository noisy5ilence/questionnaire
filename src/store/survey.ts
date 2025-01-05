import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SurveyState = {
  index: number;
  answers: Answers;
  question?: Question;
  questions: Question[];
  displayedQuestions: Question[];
};

const initialState: SurveyState = {
  index: 0,
  answers: {},
  question: undefined,
  questions: [],
  displayedQuestions: []
};

const reduceDisplayedQuestions = (questions: Question[], answers: Answers) => {
  return questions.reduce<Question[]>((displayed, question) => {
    displayed.push(question);
    question.answers.forEach((answer) => {
      if (answers[question.key]?.answer !== answer.answer) return;

      displayed.push(...(question.info || []), ...reduceDisplayedQuestions(answer.questions || [], answers));
    });

    return displayed;
  }, []);
};

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    init(state, { payload: { questions } }: PayloadAction<{ questions: Question[] }>) {
      state.question = questions[0];
      state.questions = questions;
      state.displayedQuestions = questions;
    },
    back(state) {
      state.index = Math.max(0, state.index - 1);
      state.question = state.displayedQuestions[state.index];
    },
    next(state) {
      state.index = Math.min(state.displayedQuestions.length - 1, state.index + 1);
      state.question = state.displayedQuestions[state.index];
    },
    choseAnswer(state, { payload: { question, answer } }: PayloadAction<{ question: Question; answer: Answer }>) {
      if (question.type === 'info') return state;

      state.answers[question.key] = answer;
      state.displayedQuestions = reduceDisplayedQuestions(state.questions, state.answers);
    }
  }
});

export const { choseAnswer, next, back, init } = surveySlice.actions;

export default surveySlice.reducer;
