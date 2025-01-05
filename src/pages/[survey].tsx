import fs from 'node:fs';
import { join } from 'node:path';

import { wrapper } from '@/store';
import { init } from '@/store/survey';

import Survey from '../features/Survey';

const SURVEYS_PATH = join(process.cwd(), 'surveys');

export default function SurveyPage() {
  return <Survey />;
}

export async function getStaticPaths() {
  const surveys = fs.readdirSync(SURVEYS_PATH);

  const paths = surveys.map((survey) => ({
    params: { survey: survey.replace('.json', '') }
  }));

  return { paths, fallback: false };
}

export const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async ({ params }) => {
  const path = join(SURVEYS_PATH, `${params?.survey}.json`);

  try {
    const content = fs.readFileSync(path, 'utf8');
    const questions: Question[] = JSON.parse(content);

    dispatch(init({ questions }));
  } catch (error) {
    console.log('Survey not found', error);

    dispatch(init({ questions: [] }));
  }

  return { props: {} };
});
