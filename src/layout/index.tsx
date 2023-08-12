import { ReactNode } from 'react';

import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className='mx-auto max-w-6xl px-12 pb-12 pt-0 '>{children}</main>
    </>
  );
};

export default Layout;
