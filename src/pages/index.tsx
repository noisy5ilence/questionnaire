import Link from 'next/link';
import fs from 'node:fs';
import { join } from 'node:path';

import Logo from '@/components/Logo';
import { SURVEYS_PATH } from '@/constants/paths';

type Path = { name: string; path: string };

interface Props {
  surveys: Path[];
}

export default function Home({ surveys }: Props) {
  return (
    <div className='text-nebula-foreground-alt bg-nebula-gradient flex min-h-screen w-screen flex-col'>
      <header className='fixed flex w-full items-center justify-center p-8'>
        <Logo />
      </header>
      <section className='flex h-full grow flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-semibold'>Check out our surveys: </h1>
        <ul className='flex flex-col gap-2'>
          {surveys.map(({ name, path }) => (
            <li key={path} className='group transition-all duration-300 ease-in-out'>
              <Link
                href={path}
                className='bg-gradient-to-r from-purple-500 to-pink-500 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_1px]'
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
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
