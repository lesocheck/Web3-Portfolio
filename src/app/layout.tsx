import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { Providers } from './providers';
import { Footer, Header } from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Web3 Portfolio | Andrei Beliaev',
    template: '%s | Web3 Portfolio'
  },
  description: 'Frontend developer with 10+ years of experience specializing in Web3, blockchain, and modern web technologies.',
  keywords: ['frontend developer', 'web3', 'blockchain', 'react', 'nextjs', 'ethereum', 'solana', 'ton'],
  authors: [{ name: 'Andrei Beliaev', url: 'https://github.com/lesocheck' }],
  creator: 'Andrei Beliaev',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://web3-portfolio-andrei.vercel.app',
    title: 'Web3 Portfolio | Andrei Beliaev',
    description: 'Frontend developer specializing in Web3 and blockchain technologies',
    siteName: 'Web3 Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web3 Portfolio | Andrei Beliaev',
    description: 'Frontend developer specializing in Web3 and blockchain technologies',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}