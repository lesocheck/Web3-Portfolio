import { Metadata } from 'next';
import { PortfolioClient } from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Portfolio | Andrei Beliaev - Frontend Developer',
  description: 'Frontend developer with 10+ years of experience. Specialized in Next.js, React, Angular, and Web3 development.',
  keywords: 'frontend developer, web3, blockchain, reactjs, nextjs, angular, typescript',
  openGraph: {
    title: 'Andrei Beliaev - Frontend Web3 Developer',
    description: 'Experienced frontend developer specializing in modern web technologies and blockchain integration.',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}