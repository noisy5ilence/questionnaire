import { FC } from 'react';

import { cn } from '@/libs/utils';

import Button from './components/Button';
import Header from './components/Header';

interface Props {
  question: Question;
  onAnswer: ({ key, answer }: { key: string; answer: Answer }) => void;
}

const QuestionScreen: FC<Props> = ({ question, onAnswer }) => {
  return (
    <div className='bg-bg h-screen w-screen shrink-0'>
      <Header className={cn(question.type === 'info' ? 'text-fg' : 'text-black')} />
      <div className='mx-auto w-full max-w-[330px]'>
        <h2 className='text-2xl font-bold leading-7'>{question.question}</h2>
        {Boolean(question.statement) && <h3 className='mt-[30px] text-lg font-bold'></h3>}
        <ul className='mt-[30px] flex flex-col gap-[20px]'>
          {question.answers.map((answer) => (
            <li key={answer.answer}>
              <Button className='w-full' onClick={() => onAnswer({ answer, key: question.key })}>
                {answer.answer}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionScreen;
