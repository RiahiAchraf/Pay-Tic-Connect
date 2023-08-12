import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

import { Input, Select } from '@/components/kit';
import itemsTypes from '@/utils/itemsTypes';

interface TaskCardProps {
  id: number;
  status: string;
  setAssign: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, status, setAssign, setTitle }) => {
  const [{}, drag] = useDrag({
    type: itemsTypes.CARD,
    item: { type: itemsTypes.CARD, ID: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [selectedValue, setSelectedValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value);
    setAssign(event.target.value);
  };

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
    setTitle(event.target.value);
  };

  return (
    <div
      className=' flex cursor-pointer flex-col gap-2 rounded-lg border !bg-white p-5 shadow-sm hover:bg-gray-100/50'
      ref={drag}
    >
      <h3 className='font-bold'>{status}</h3>

      <Input
        type='text'
        label='Title'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Enter a task'
      />

      <Select
        label='Assigned'
        value={selectedValue}
        onChange={handleSelectChange}
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ]}
      />
    </div>
  );
};

export default TaskCard;
