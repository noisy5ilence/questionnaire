const enum QuestionType {
  submit = 'submit',
  radio = 'radio',
  info = 'info'
}

type Info = {
  type: QuestionType;
  title: string;
  content: string;
  action: string;
};

type Question = {
  key: string;
  question: string;
  statement?: string;
  info?: Info[];
  answers: Answer[];
  type: QuestionType;
};

type Answer = {
  answer: string;
  substitution?: string;
  questions?: Question[];
};
