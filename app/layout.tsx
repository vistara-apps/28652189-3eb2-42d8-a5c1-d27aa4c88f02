import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CitizenShield - Know Your Rights. Stay Safe.',
  description: 'A mobile app for individuals to quickly access their legal rights, de-escalation tactics, and discreetly document interactions with law enforcement.',
  keywords: 'legal rights, law enforcement, de-escalation, recording, safety, Base, blockchain',
  authors: [{ name: 'CitizenShield Team' }],
  openGraph: {
    title: 'CitizenShield - Know Your Rights. Stay Safe.',
    description: 'Access legal rights, de-escalation tactics, and document interactions safely.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
