import { FC } from 'react';
import Link from 'next/link';

import LogoIcon from './icons/logo.svg';

interface Props {
  size?: number;
}

const Logo: FC<Props> = ({ size = 32 }) => {
  return (
    <Link href='/' style={{ width: size, height: size }}>
      <LogoIcon />
    </Link>
  );
};

export default Logo;
