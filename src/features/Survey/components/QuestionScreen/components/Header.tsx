import { FC } from 'react';
import Link from 'next/link';

import Arrow from '@/components/icons/arrow.svg';
import Logo from '@/components/icons/logo.svg';
import { cn } from '@/libs/utils';

interface Props {
  className?: string;
}

const Header: FC<Props> = ({ className }) => {
  return (
    <header
      className={cn(
        'mx-auto flex w-full max-w-[1200px] items-center justify-between py-[10px] md:py-[15px]',
        className
      )}
    >
      <button className='flex size-[24px] items-center justify-center'>
        <Arrow />
      </button>
      <Link className='flex size-[16px] items-center justify-center' href='/'>
        <Logo />
      </Link>
      <div className='w-[24px]' />
    </header>
  );
};

export default Header;
