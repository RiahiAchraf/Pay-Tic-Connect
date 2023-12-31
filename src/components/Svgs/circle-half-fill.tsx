import { cn } from '@/utils/cn';

const CircleFillLeft = ({ className }: { className: string }) => {
  return (
    <svg
      className={cn(className, 'fill-current')}
      height={24}
      width={24}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <path d='M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z'></path>
    </svg>
  );
};

export default CircleFillLeft;
