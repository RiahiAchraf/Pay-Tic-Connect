import { cn } from '@/utils/cn';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  className?: string;
  label?: string;
}

export const Select = ({ options, label, className, ...props }: SelectProps) => {
  return (
    <div>
      <label className='block text-sm font-medium leading-6 text-gray-900'>{label}</label>
      <div>
        <select
          className={cn(
            className,
            'cursor-pointer mt-2 border w-full shadow-sm rounded-lg px-5 py-[0.781rem]   focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:bg-gray-100',
            ' border-zinc-400 ',
          )}
          {...props}
        >
          <option value='' disabled>
            -- Select --
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
