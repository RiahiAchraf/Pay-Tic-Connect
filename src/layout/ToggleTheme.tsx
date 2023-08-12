'use client';

import { useTheme } from 'next-themes';

import { CircleHalfFill } from '@/components/Svgs';
import { cn } from '@/utils/cn';

const ToggleTheme = ({ className }: { className: string }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn(className, 'flex cursor-pointer items-center justify-between')}>
      <button
        onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
        className='transition-all duration-100 '
      >
        <CircleHalfFill className={cn(theme == 'dark' ? 'fill-gray-g9 ' : 'fill-gray-g2')} />
      </button>
    </div>
  );
};

export default ToggleTheme;
