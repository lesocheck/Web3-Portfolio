import { Metadata } from 'next';
import { SolanaClient } from './SolanaClient';

export const metadata: Metadata = {
  title: 'Solana | Web3 Portfolio',
  description: 'Connect and interact with Phantom and explore the Solana ecosystem.',
};

export default function SolanaPage() {
  return <SolanaClient />;
}