import Link from 'next/link';
import fs from 'node:fs';
import { join } from 'node:path';

import { SURVEYS_PATH } from '@/constants/paths';
import DefaultLayout from '@/layouts/Default';

type Path = { name: string; path: string };

interface Props {
  surveys: Path[];
}

export default function Home({ surveys }: Props) {
  return (
    <DefaultLayout title='Check out our surveys:'>
      <ul className='flex flex-col gap-2'>
        {surveys.map(({ name, path }) => (
          <li key={path} className='group text-center transition-all duration-300 ease-in-out'>
            <Link
              href={path}
              className='bg-gradient-to-r from-purple-500 to-pink-500 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_1px]'
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(SURVEYS_PATH);

  const surveys = files.map((filepath) => {
    const path = join(SURVEYS_PATH, filepath);

    const content = fs.readFileSync(path, 'utf8');
    const survey: Survey = JSON.parse(content);

    return {
      path: `/${filepath.replace('.json', '')}`,
      name: survey.title
    };
  });

  return {
    props: {
      surveys
    } as Props
  };
}
