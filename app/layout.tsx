import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';
import s from './layout.module.css';
export const metadata: Metadata = {
  title: { default: 'Toolbox - Practical browser utilities', template: '%s - Toolbox' },
  description: 'A growing collection of focused browser utilities.',
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className={s.shell}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
