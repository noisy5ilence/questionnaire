import { FC, ReactNode } from 'react';

import Header from '@/components/Header';

interface Props {
  children: ReactNode;
  title: string;
}

const DefaultLayout: FC<Props> = ({ children, title }) => {
  return (
    <div className='text-nebula-foreground-alt bg-nebula-gradient flex min-h-screen w-screen flex-col'>
      <Header />
      <section className='mx-auto mt-16 flex max-w-[600px] flex-col gap-4'>
        <h1 className='text-center text-2xl font-semibold'>{title}</h1>
        {children}
      </section>
    </div>
  );
};

export default DefaultLayout;
