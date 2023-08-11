import { clsx } from 'clsx';

interface selectProps {
  value: string;
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
}

export default function Input({ name, label, className, placeholder, ...props }: selectProps) {
  return (
    <div className='w-full'>
      <label htmlFor={name} className='block text-sm font-medium leading-6 text-gray-900'>
        {label}
      </label>
      <div className='mt-2'>
        <input
          type='text'
          name={name}
          id={name}
          placeholder={placeholder}
          autoComplete='given-name'
          className={clsx(
            className,
            'w-full rounded-lg border border-zinc-400 px-5 py-[0.781rem] shadow-sm placeholder:text-zinc-400 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:bg-gray-100',
          )}
          {...props}
        />
      </div>
    </div>
  );
}
