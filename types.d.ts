const enum QuestionType {
  radio = 'radio',
  info = 'info'
}

type Survey = {
  title: string;
  questions: Question[];
};

type Question = {
  key: string;
  question: string;
  statement?: string;
  info?: Question[];
  answers: Answer[];
  type: QuestionType;
};

type Answer = {
  answer: string;
  substitution?: string;
  questions?: Question[];
};

type Answers = Record<string, Answer>;
