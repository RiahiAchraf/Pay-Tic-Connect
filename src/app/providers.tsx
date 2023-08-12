'use client';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

type AllProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: AllProvidersProps) => (
  <ThemeProvider attribute='class' disableTransitionOnChange>
    <DndProvider backend={HTML5Backend}>{children}</DndProvider>
  </ThemeProvider>
);

export default Providers;
