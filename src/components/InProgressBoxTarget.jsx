import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';

import itemsTypes from '@/utils/itemsTypes';

import { CardContext } from './Tasks';

const InProgressBoxTarget = ({ children }) => {
  const { isInProgress } = useContext(CardContext);

  const [{}, drop] = useDrop({
    accept: itemsTypes.CARD,

    drop: (item) => isInProgress(item.ID),
  });

  return (
    <div ref={drop} className='min-h-[600px] w-full p-4'>
      {children}
    </div>
  );
};

export default InProgressBoxTarget;
