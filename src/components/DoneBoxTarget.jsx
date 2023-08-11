import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';

import itemsTypes from '../utils/itemsTypes';
import { CardContext } from './Tasks';

const DoneBoxTarget = ({ children }) => {
  const { isDone } = useContext(CardContext);

  const [{ isOver }, drop] = useDrop({
    accept: itemsTypes.CARD,

    drop: (item) => isDone(item.ID),
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

export default DoneBoxTarget;
