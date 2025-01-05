import { FC } from 'react';

import { ChooseAnswer } from '@/features/Survey/hooks/useSurvey';

import Button from './Button';

interface Props {
  question: Question;
  answers: Answers;
  onAnswer: ChooseAnswer;
}

const Options: FC<Props> = ({ question, answers, onAnswer }) => {
  return (
    <ul className='mt-[30px] flex flex-col gap-[20px]'>
      {question.answers.map((answer) => (
        <li key={answer.answer}>
          <Button
            className='w-full'
            variant={
              question.type === 'info' ? 'info' : answers[question.key]?.answer === answer.answer ? 'active' : 'default'
            }
            onClick={() => onAnswer({ answer, question })}
          >
            {answer.answer}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Options;
