'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

type AllProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: AllProvidersProps) => (
  <ChakraProvider>
    <DndProvider backend={HTML5Backend}>{children}</DndProvider>
  </ChakraProvider>
);

export default Providers;
