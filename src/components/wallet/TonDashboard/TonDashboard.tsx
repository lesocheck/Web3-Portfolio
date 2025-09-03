'use client';

import React from 'react';
import { Card, Button } from '@/components/common';
import { useTon } from '@/hooks';

export function TonDashboard() {
  const {
    connected,
    connecting,
    address,
    connect,
    disconnect,
    isOpenMaskInstalled,
  } = useTon();

  if (!connected) {
    return (
      <Card>
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-6">Connect OpenMask Wallet</h2>
          
          {!isOpenMaskInstalled && (
            <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-yellow-700 text-sm">
              OpenMask wallet not detected. Please install OpenMask extension first.
            </div>
          )}
          
          <Button
            onClick={connect}
            loading={connecting}
            disabled={!isOpenMaskInstalled}
            fullWidth
            size="lg"
          >
            Connect OpenMask
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            Make sure you have OpenMask extension installed
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">OpenMask Connected</h2>
          
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
                0.0000 TON
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