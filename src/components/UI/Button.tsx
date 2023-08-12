import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { cn } from '@/utils/cn';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  /**
   * Is the button disabled?
   * @default false
   */
  disabled?: boolean;
};

const Button = ({ children, className, disabled = false, ...props }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        'flex items-center justify-center rounded-lg transition duration-200 cursor-pointer disabled:cursor-not-allowed shadow-sm',
        'py-3 px-4 text-sm font-semibold',
        'shadow-sm hover:bg-gray-600 dark:hover:bg-violet-900/60 ',
        'bg-gray-g1  dark:bg-violet-900/40 text-gray-g9  dark:text-gray-g9  shadow',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
