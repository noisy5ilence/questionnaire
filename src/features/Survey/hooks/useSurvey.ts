import { useDispatch, useSelector } from '@/store';
import { back, choseAnswer, next } from '@/store/survey';

export const useSurvey = () => useSelector((state) => state.survey);

export const useDisplayedQuestions = () => useSelector((state) => state.survey.displayedQuestions);
export const useAnswers = () => useSelector((state) => state.survey.answers);

export const useNextQuestion = () => {
  const dispatch = useDispatch();

  return dispatch(next());
};

export const usePreviousQuestion = () => {
  const dispatch = useDispatch();

  return dispatch(back());
};

export const useChooseAnswer = ({ key, answer }: { key: string; answer: Answer }) => {
  const dispatch = useDispatch();

  return dispatch(choseAnswer({ key, answer }));
};
