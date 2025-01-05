import { FC, ReactNode } from 'react';

import Header from '@/components/Header';
import { defaultThemeColor } from '@/constants/colors';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
  children: ReactNode;
  title: string;
}

const DefaultLayout: FC<Props> = ({ children, title }) => {
  useThemeColor(defaultThemeColor);

  return (
    <div className='text-nebula-foreground-alt bg-nebula-gradient flex min-h-dvh w-screen flex-col'>
      <Header />
      <section className='mx-auto mt-16 flex max-w-[600px] flex-col gap-4'>
        <h1 className='text-center text-2xl font-semibold'>{title}</h1>
        {children}
      </section>
    </div>
  );
};

export default DefaultLayout;
