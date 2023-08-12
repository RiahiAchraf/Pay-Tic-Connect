import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className='mx-auto max-w-6xl px-5 py-12 sm:p-12'>{children}</main>
    </>
  );
};

export default Layout;
