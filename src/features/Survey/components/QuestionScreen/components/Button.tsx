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
        'rounded-[16px] border border-nebula-button-border bg-nebula-button-background py-[21px] px-[16px] text-sm shadow-nebula-button transition-shadow active:shadow-none',
        variant === 'active' && 'bg-nebula-gradient text-nebula-foreground-alt',
        variant === 'info' &&
          'bg-nebula-button-background-alt text-nebula-button-foreground shadow-nebula-button-alt text-lg leading-[21px] py-[13.5] rounded-[12px]',
        props.className
      )}
    />
  );
};

export default Button;
