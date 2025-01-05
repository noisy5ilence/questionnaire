import { FC } from 'react';

import SurveyScreen from './components/QuestionScreen';
import { useDisplayedQuestions } from './hooks/useSurvey';

const Survey: FC = () => {
  const questions = useDisplayedQuestions();

  const handleAnswer = ({ answer, key }: { answer: Answer; key: string }) => {};

  return (
    <div className='flex'>
      {questions.map((question) => (
        <SurveyScreen key={question.key} question={question} onAnswer={handleAnswer} />
      ))}
    </div>
  );
};

export default Survey;
