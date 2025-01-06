import { FC, Fragment } from 'react';

import DefaultLayout from '@/layouts/Default';
import { interpolate } from '@/libs/utils';

interface Props {
  answers: Answers;
  questions: Question[];
}

const ResumeScreen: FC<Props> = ({ answers, questions }) => {
  return (
    <DefaultLayout title='Your answers:'>
      <ul className='flex flex-col gap-5 p-8 pb-20'>
        {questions.map(({ key, question, statement, type }, index, array) => {
          if (type === 'info') return null;

          return (
            <Fragment key={key}>
              <li className='flex flex-col gap-2'>
                <h2 className='text-sm'>{interpolate(question, answers)}</h2>
                {statement && <p className='text-sm'>{interpolate(statement, answers)}</p>}
                <h3 className='text-lg font-semibold'>{answers[key]?.answer}</h3>
              </li>
              {Boolean(index < array.length - 1) && (
                <hr className='my-3 h-0.5 border-t-0 bg-neutral-100/20 dark:bg-white/10' />
              )}
            </Fragment>
          );
        })}
      </ul>
    </DefaultLayout>
  );
};

export default ResumeScreen;
