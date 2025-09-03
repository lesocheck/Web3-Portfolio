'use client';

import React from 'react';
import { Card, Button } from '@/components/common';
import { useSolana } from '@/hooks';

export function SolanaDashboard() {
  const {
    connected,
    connecting,
    publicKey,
    connect,
    disconnect,
    isPhantomInstalled,
    initialized,
  } = useSolana();

  if (!initialized) {
    return (
      <Card>
        <div className="text-center p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
            <div className="h-12 bg-gray-200 rounded w-32 mx-auto"></div>
          </div>
        </div>
      </Card>
    );
  }

  if (!connected) {
    return (
      <Card>
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-6">Connect Phantom Wallet</h2>
          
          {!isPhantomInstalled && (
            <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-yellow-700 text-sm">
              Phantom wallet not detected. Please install Phantom extension first.
            </div>
          )}
          
          <Button
            onClick={connect}
            loading={connecting}
            disabled={!isPhantomInstalled}
            fullWidth
            size="lg"
          >
            Connect Phantom
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            Make sure you have Phantom extension installed
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Phantom Connected</h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Public Key</label>
              <p className="font-mono text-sm bg-gray-100 p-2 rounded">
                {publicKey}
              </p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-600">Balance</label>
              <p className="text-xl font-bold">
                0.0000 SOL
              </p>
              <p className="text-xs text-gray-500">
                Balance fetching will be implemented later
              </p>
            </div>
          </div>
          
          <div className="mt-6">
            <Button
              onClick={disconnect}
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