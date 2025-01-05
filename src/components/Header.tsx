import { FC } from 'react';

import Logo from './Logo';

const Header: FC = () => {
  return (
    <header className='supports-[backdrop-filter]:bg-background/60 sticky top-0 flex w-full items-center justify-center p-4 backdrop-blur md:p-8'>
      <Logo />
    </header>
  );
};

export default Header;
