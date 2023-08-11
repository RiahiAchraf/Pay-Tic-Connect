import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

import itemsTypes from '../utils/itemsTypes';

interface TaskCardProps {
  content: React.ReactNode;
  status: string;
  title: string;
  id: number;
  setSelectValue: (value: string) => void;
  setChecked: (value: boolean) => void;
  item: React.Dispatch<React.SetStateAction<string>>;
  idx: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ status, title, id, content, item }) => {
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
    item(event.target.value);
  };

  return (
    <div
      className=' flex cursor-pointer flex-col gap-2 rounded-lg border !bg-white p-5 shadow-sm hover:bg-gray-100/50'
      ref={drag}
    >
      <span className='font-bold'>{status}</span>
      <h1>{title}</h1>
      {content}
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
    </div>
  );
};

export default TaskCard;
