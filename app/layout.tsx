import "./globals.css";
import NavBar from '@/components/NavBar';
import type { Metadata } from "next";
import {Inconsolata} from 'next/font/google';

const inconsolata = Inconsolata({subsets:['latin']});

export const metadata: Metadata = {
  title:'Next.Js Project',
  description:'A Next.js Project with TypeScript and TailwindCSS.',
  keywords:'Next.js, Typescript, TailwindCSS',
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <NavBar />
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}
