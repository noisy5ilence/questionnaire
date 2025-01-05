import { FC, HTMLAttributes } from 'react';

import { cn } from '@/libs/utils';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'info' | 'active';
}

const Button: FC<Props> = ({ variant = 'default', ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'rounded-[16px] border border-brd bg-bg-btn py-[21px] text-sm shadow-btn transition-shadow active:shadow-none',
        variant === 'active' && 'bg-bg-alt text-fg-alt',
        variant === 'info' && 'bg-bg-btn-alt text-fg-btn-alt shadow-btn-alt',
        props.className
      )}
    />
  );
};

export default Button;
