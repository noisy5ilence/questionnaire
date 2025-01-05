import { FC } from 'react';
import Link from 'next/link';

import Arrow from '@/components/icons/arrow.svg';
import Logo from '@/components/Logo';
import { useNextQuestion, usePreviousQuestion } from '@/features/Survey/hooks/useSurvey';
import { cn } from '@/libs/utils';

interface Props {
  className?: string;
}

const Header: FC<Props> = ({ className }) => {
  const goToPreviousQuestion = usePreviousQuestion();
  const goToNextQuestion = useNextQuestion();

  return (
    <header
      className={cn(
        'mx-auto flex w-full max-w-[1200px] items-center justify-between px-[12px] py-[10px] md:py-[15px]',
        className
      )}
    >
      <button
        className={cn('flex size-[24px] items-center justify-center', !goToPreviousQuestion && 'invisible')}
        onClick={goToPreviousQuestion}
      >
        <Arrow />
      </button>
      <Link className='flex size-[16px] items-center justify-center' href='/'>
        <Logo size={16} />
      </Link>
      <button
        className={cn('flex size-[24px] rotate-180 items-center justify-center', !goToNextQuestion && 'invisible')}
        onClick={goToNextQuestion}
      >
        <Arrow />
      </button>
    </header>
  );
};

export default Header;
