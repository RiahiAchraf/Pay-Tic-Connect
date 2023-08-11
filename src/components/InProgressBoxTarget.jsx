import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';

import itemsTypes from '../utils/itemsTypes';
import { CardContext } from './Tasks';

const InProgressBoxTarget = ({ children }) => {
  const { isInProgress } = useContext(CardContext);

  const [{ isOver }, drop] = useDrop({
    accept: itemsTypes.CARD,

    // drop: (item, monitor) => isDone(item.ID),

    canDrop: (item) => {
      if (isInProgress(item.ID)) {
        isInProgress(item.ID);
      }
    },
  });

  return (
    <Box
      ref={drop}
      minH='600px'
      w='100%'
      p={4}
      rounded='md'
      bg={isOver ? 'green.300' : 'transparent'}
    >
      {children}
    </Box>
  );
};

export default InProgressBoxTarget;
