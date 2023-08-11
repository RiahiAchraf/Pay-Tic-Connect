import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className='mx-auto max-w-6xl p-12'>{children}</main>
    </>
  );
};

export default Layout;
