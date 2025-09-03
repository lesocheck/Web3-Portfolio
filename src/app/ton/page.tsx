import { Metadata } from 'next';
import { TonClient } from './TonClient';

export const metadata: Metadata = {
  title: 'TON | Web3 Portfolio', 
  description: 'Connect and interact with OpenMask and explore The Open Network ecosystem.',
};

export default function TonPage() {
  return <TonClient />;
}