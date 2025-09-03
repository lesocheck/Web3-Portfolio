'use client';

import React, { useEffect, useState } from 'react';
import { Card, Button } from '@/components/common';
import { useEthereum } from '@/hooks';

export function EthereumDashboard() {
  const [mounted, setMounted] = useState(false);
  const {
    address,
    isConnected,
    isConnecting,
    balance,
    connectMetaMask,
    disconnect,
    error,
  } = useEthereum();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
              <div className="h-12 bg-gray-200 rounded w-32 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <Card>
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-6">Connect MetaMask</h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
              Error: {error}
            </div>
          )}
          
          <Button
            onClick={connectMetaMask}
            loading={isConnecting}
            fullWidth
            size="lg"
          >
            Connect MetaMask
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            Make sure you have MetaMask extension installed
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">MetaMask Connected</h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Address</label>
              <p className="font-mono text-sm bg-gray-100 p-2 rounded">
                {address}
              </p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-600">Balance</label>
              <p className="text-xl font-bold">
                {parseFloat(balance).toFixed(4)} ETH
              </p>
            </div>
          </div>
          
          <div className="mt-6">
            <Button
              onClick={() => disconnect()}
              variant="outline"
            >
              Disconnect
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}