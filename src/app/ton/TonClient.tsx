'use client';

import { TonDashboard } from '@/components/wallet';
import React from 'react';

export function TonClient() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">TON Wallet</h1>
      </div>
      
      <TonDashboard />
    </div>
  );
}