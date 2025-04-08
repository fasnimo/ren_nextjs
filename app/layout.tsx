// app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';
import ClientLayout from './client-layout';
import NavBar from '@/components/NavBar';

const inconsolata = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.Js Project',
  description: 'A Next.js Project with TypeScript and TailwindCSS.',
  keywords: 'Next.js, Typescript, TailwindCSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <ClientLayout>
          <NavBar />
          <main className="max-w-3xl mx-auto py-10">{children}</main>
        </ClientLayout>
      </body>
    </html>
  );
}
