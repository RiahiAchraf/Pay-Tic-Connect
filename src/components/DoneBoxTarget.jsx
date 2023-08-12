import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';

import itemsTypes from '../utils/itemsTypes';
import { CardContext } from './Tasks';

const DoneBoxTarget = ({ children }) => {
  const { isDone } = useContext(CardContext);

  const [{}, drop] = useDrop({
    accept: itemsTypes.CARD,

    drop: (item) => isDone(item.ID),
  });

  return (
    <div ref={drop} className='min-h-[600px] w-full p-4'>
      {children}
    </div>
  );
};

export default DoneBoxTarget;
