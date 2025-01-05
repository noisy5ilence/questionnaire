import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export type SurveyState = {
  index: number;
  answers: Record<string, Answer>;
  displayedQuestions: Question[];
};

const initialState: SurveyState = {
  index: 0,
  answers: {},
  displayedQuestions: []
};

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    init(state, { payload: { questions } }: PayloadAction<{ questions: Question[] }>) {
      state.displayedQuestions = questions;
    },
    back(state) {
      state.index = state.index - 1;
    },
    next(state) {
      state.index = state.index + 1;
    },
    choseAnswer(state, { payload: { key, answer } }: PayloadAction<{ key: string; answer: Answer }>) {
      state.answers[key] = answer;
      state.index = state.index + 1;
    }
  }
});

export const { choseAnswer, next, back, init } = surveySlice.actions;

export default surveySlice.reducer;
