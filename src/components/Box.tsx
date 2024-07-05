import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

interface BoxProps extends PropsWithChildren {
  className?: string;
}

const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={cn(`bg-neutral-900 rounded-lg h-fit w-full`, className)}
    >
      {children}
    </div>
  );
};

export default Box;
