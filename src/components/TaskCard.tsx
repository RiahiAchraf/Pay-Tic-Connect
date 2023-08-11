import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

import itemsTypes from '../utils/itemsTypes';

interface TaskCardProps {
  status: string;
  title: string;
  id: number;
  setSelectValue: (value: string) => void;
  setChecked: (value: boolean) => void;
  setTextValue: (value: string) => void;
  idx: number;
}

const TaskCard: React.FC<TaskCardProps> = ({
  status,
  title,
  id,
  setSelectValue,
  setTextValue,
  setChecked,
}) => {
  const [{}, drag] = useDrag({
    type: itemsTypes.CARD,
    item: { type: itemsTypes.CARD, ID: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value);
    setSelectValue(event.target.value);
  };

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
    setTextValue(event.target.value);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setChecked(!isChecked);
  };

  return (
    <div
      className=' flex cursor-pointer flex-col gap-2 rounded-lg border !bg-white p-5 shadow-sm hover:bg-gray-100/50'
      ref={drag}
    >
      <span className='font-bold'>{status}</span>
      <h1>{title}</h1>

      <div>
        <label className='mb-2 block text-sm font-medium leading-6 text-gray-900'>Title</label>
        <input
          className='w-full rounded-lg border border-zinc-400 px-5 py-[0.781rem] shadow-sm placeholder:text-zinc-400 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:bg-gray-100'
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Type...'
        />
      </div>

      <div>
        <label className='block text-sm font-medium leading-6 text-gray-900'>Assigned</label>
        <select
          className='mt-2 block w-full rounded-md border-0 py-4 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none sm:text-sm sm:leading-6'
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value='' disabled>
            Select an option
          </option>
          <option value='user1'>User 1</option>
          <option value='user2'>User 2</option>
          <option value='user3'>User 3</option>
        </select>
      </div>

      <div className='flex items-center gap-2'>
        <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
        <label className='block text-sm font-medium leading-6 text-gray-900'>Check!</label>
      </div>
    </div>
  );
};

export default TaskCard;
