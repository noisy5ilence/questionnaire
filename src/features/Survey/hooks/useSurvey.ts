import { useDispatch, useSelector } from '@/store';
import { back, choseAnswer, next } from '@/store/survey';

export const useIndex = () => useSelector((state) => state.survey.index);

export const useQuestion = () => useSelector((state) => state.survey.question);
export const useDisplayedQuestions = () => useSelector((state) => state.survey.displayedQuestions);

export const useAnswers = () => useSelector((state) => state.survey.answers);

export const useIsSurveyComplete = () => useSelector((state) => state.survey.isComplete);

export const useNextQuestion = () => {
  const dispatch = useDispatch();
  const answers = useAnswers();
  const question = useQuestion();
  const index = useIndex();
  const questions = useDisplayedQuestions();

  if (!question || !answers[question.key] || questions.length - 1 === index) return undefined;

  return () => dispatch(next());
};

export const usePreviousQuestion = () => {
  const dispatch = useDispatch();
  const index = useIndex();

  if (!index) return undefined;

  return () => dispatch(back());
};

export const useChooseAnswer = () => {
  const dispatch = useDispatch();

  return ({ question, answer }: { question: Question; answer: Answer }) => {
    dispatch(choseAnswer({ question, answer }));
    dispatch(next());
  };
};

export type ChooseAnswer = ReturnType<typeof useChooseAnswer>;
