import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';

import Layout from '@/layout';

export const metadata: Metadata = {
  title: 'Pay tic connect',
  description: 'Created by pay tic connect',
};

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
  display: 'swap',
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className={`${ubuntu.className} font-sans`}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
