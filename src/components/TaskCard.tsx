import React from 'react';
import { useDrag } from 'react-dnd';

import itemsTypes from '../utils/itemsTypes';

interface TaskCardProps {
  status: string;
  title: string;
  content: string;
  icon: string;
  id: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ status, title, content, id }) => {
  const [{}, drag] = useDrag({
    type: itemsTypes.CARD,
    item: { type: itemsTypes.CARD, ID: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  // const handleDrag = (status) => {
  //   if (status === "DONE") {
  //     isDone(id);
  //   } else if (status === "InProgress") {
  //     isInProgress(id);
  //   }
  // };

  return (
    <div
      className=' flex cursor-pointer flex-col gap-1 rounded-lg border !bg-white p-4 shadow-sm hover:bg-gray-100/50'
      ref={drag}
    >
      <span className='font-bold'>{status}</span>
      <h1>{title}</h1>
      <p className='flex items-center'>{content}</p>
    </div>
  );
};

export default TaskCard;
