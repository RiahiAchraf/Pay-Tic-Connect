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
        'shadow-sm bg-black text-white enabled:hover:bg-gray-600 disabled:bg-gray-100 disabled:border-[0.03125rem] disabled:border-gray-400 disabled:text-gray-400',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
