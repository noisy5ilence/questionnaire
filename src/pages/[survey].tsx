import Head from 'next/head';
import fs from 'node:fs';
import { join } from 'node:path';

import { surveyThemeColor } from '@/constants/colors';
import { SURVEYS_PATH } from '@/constants/paths';
import SurveyComponent from '@/features/Survey';
import { wrapper } from '@/store';
import { init } from '@/store/survey';

export default function SurveyPage() {
  return (
    <>
      <Head>
        <meta name='theme-color' content={surveyThemeColor} />
      </Head>
      <SurveyComponent />
    </>
  );
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

  const content = fs.readFileSync(path, 'utf8');
  const survey: Survey = JSON.parse(content);

  dispatch(init({ questions: survey.questions }));

  return { props: {} };
});
