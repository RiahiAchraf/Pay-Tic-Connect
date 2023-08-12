import { cn } from '@/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id?: string;
  label?: string;
}

export const Input = ({ className, id, label, ...props }: InputProps) => {
  return (
    <div>
      <label className='block text-sm font-medium leading-6 text-gray-900'>{label}</label>
      <div className='flex items-center space-x-[0.312rem]'>
        <input
          className={cn(
            'mt-2 border w-full shadow-sm rounded-lg px-5 py-[0.781rem]   focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:bg-gray-100',
            'placeholder:text-zinc-400',
            ' border-zinc-400 ',
            className,
          )}
          id={id}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
