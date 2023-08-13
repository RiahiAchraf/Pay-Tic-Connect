import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

import { Input, Select } from '@/components/UI';
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
      data-test='task-card'
      className=' flex cursor-pointer flex-col gap-2 rounded-lg border bg-gradient-to-r from-white/20 p-5 shadow-sm dark:border-0 dark:from-indigo-900/30 dark:shadow-xl'
      ref={drag}
    >
      <h3 className='font-bold '>{status}</h3>

      <Input
        data-test='title'
        type='text'
        label='Title'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Enter a task'
      />

      <Select
        data-test='assigned'
        label='Assigned'
        value={selectedValue}
        onChange={handleSelectChange}
        options={[
          { value: 'emily', label: 'Emily' },
          { value: 'liam', label: 'Liam' },
          { value: 'ava', label: 'Ava' },
        ]}
      />
    </div>
  );
};

export default TaskCard;
