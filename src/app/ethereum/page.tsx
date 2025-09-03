import { Metadata } from 'next';
import { EthereumClient } from './EthereumClient';

export const metadata: Metadata = {
  title: 'Ethereum | Web3 Portfolio',
  description: 'Connect and interact with Ethereum wallets, send transactions, and explore Wagmi and Viem libraries.',
};

export default function EthereumPage() {
  return <EthereumClient />;
}