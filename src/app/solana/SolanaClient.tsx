'use client';

import { SolanaDashboard } from '@/components/wallet';
import React from 'react';

export function SolanaClient() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Solana Wallet</h1>
      </div>
      
      <SolanaDashboard />
    </div>
  );
}