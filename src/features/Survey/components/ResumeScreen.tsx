import { FC } from 'react';

interface Props {
  answers: Answers;
  questions: Question[];
}

const ResumeScreen: FC<Props> = ({ answers, questions }) => {
  return <div>Resume</div>;
};

export default ResumeScreen;
