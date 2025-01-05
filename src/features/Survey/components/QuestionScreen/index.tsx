import { FC } from 'react';

import { defaultThemeColor, surveyThemeColor } from '@/constants/colors';
import { ChooseAnswer, useAnswers } from '@/features/Survey/hooks/useSurvey';
import { useThemeColor } from '@/hooks/useThemeColor';
import { cn, interpolate } from '@/libs/utils';

import Header from './components/Header';
import Options from './components/Options';

interface Props {
  question: Question;
  onAnswer: ChooseAnswer;
}

const QuestionScreen: FC<Props> = ({ question, onAnswer }) => {
  const answers = useAnswers();

  useThemeColor(question.type === 'info' ? defaultThemeColor : surveyThemeColor);

  return (
    <div
      className={cn(
        'bg-nebula-background min-h-dvh w-full shrink-0 pb-10',
        question.type === 'info' ? 'text-nebula-foreground-alt bg-nebula-gradient' : 'text-black'
      )}
    >
      <Header className={cn('bg-nebula-background sticky top-0', question.type === 'info' && 'bg-transparent')} />
      <div className='mx-auto mt-[15px] w-full max-w-[330px]'>
        <h2 className={cn('text-2xl font-bold leading-7', question.type === 'info' && 'text-center')}>
          {interpolate(question.question, answers)}
        </h2>
        {Boolean(question.statement) && (
          <h3
            className={cn(
              'mt-[30px] text-lg font-bold',
              question.type === 'info' && 'text-center font-normal text-sm leading-[26px]'
            )}
          >
            {question.statement}
          </h3>
        )}
        {['info', 'radio'].includes(question.type) && (
          <Options question={question} answers={answers} onAnswer={onAnswer} />
        )}
      </div>
    </div>
  );
};

export default QuestionScreen;
