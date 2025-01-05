import { FC } from 'react';

import ResumeScreen from '@/features/Survey/components/ResumeScreen';

import QuestionScreen from './components/QuestionScreen';
import {
  useAnswers,
  useChooseAnswer,
  useDisplayedQuestions,
  useIsSurveyComplete,
  useQuestion
} from './hooks/useSurvey';

const Survey: FC = () => {
  const question = useQuestion();
  const answers = useAnswers();
  const questions = useDisplayedQuestions();

  const isSurveyComplete = useIsSurveyComplete();

  const onChooseAnswer = useChooseAnswer();

  if (!question) return null;

  if (isSurveyComplete) return <ResumeScreen answers={answers} questions={questions} />;

  return <QuestionScreen key={question.key} question={question} onAnswer={onChooseAnswer} />;
};

export default Survey;
