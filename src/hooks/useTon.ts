import { useCallback, useEffect, useState } from 'react';
import { STORAGE_KEYS } from '@/constants/storage';

interface OpenMaskProvider {
  isOpenMask: boolean;
  isConnected: boolean;
  send(method: string, params: unknown[]): Promise<unknown>;
  addListener(event: string, handler: (...args: unknown[]) => void): void;
  removeListener(event: string, handler: (...args: unknown[]) => void): void;
}

export function useTon() {
  const [provider, setProvider] = useState<OpenMaskProvider | null>(null);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const initWallet = async () => {
      if (typeof window === 'undefined' || !window.ton) {
        return;
      }

      const tonProvider = window.ton as unknown as OpenMaskProvider;
      setProvider(tonProvider);
      
      const shouldAutoConnect = localStorage.getItem(STORAGE_KEYS.OPENMASK_WALLET_AUTO_CONNECT) === 'true';
      
      if (shouldAutoConnect) {
        try {
          setConnecting(true);
          const accounts = await tonProvider.send('ton_requestAccounts', []) as string[];
          if (accounts && accounts.length > 0) {
            setConnected(true);
            setAddress(accounts[0]);
            localStorage.setItem(STORAGE_KEYS.OPENMASK_WALLET_AUTO_CONNECT, 'true');
          } else {
            localStorage.removeItem(STORAGE_KEYS.OPENMASK_WALLET_AUTO_CONNECT);
          }
        } catch (error) {
          console.log(error)
          localStorage.removeItem(STORAGE_KEYS.OPENMASK_WALLET_AUTO_CONNECT);
        } finally {
          setConnecting(false);
        }
      }
    };

    initWallet();
  }, []);

  const connect = useCallback(async () => {
    if (!provider) return;

    try {
      setConnecting(true);
      const accounts = await provider.send('ton_requestAccounts', []) as string[];
      
      if (accounts && accounts.length > 0) {
        setConnected(true);
        setAddress(accounts[0]);
        localStorage.setItem(STORAGE_KEYS.OPENMASK_WALLET_AUTO_CONNECT, 'true');
      }
    } catch (error) {
      console.error('Failed to connect to OpenMask:', error);
    } finally {
      setConnecting(false);
    }
  }, [provider]);

  const disconnect = useCallback(async () => {
    setConnected(false);
    setAddress(null);
    localStorage.removeItem(STORAGE_KEYS.OPENMASK_WALLET_AUTO_CONNECT);
  }, []);

  return {
    provider,
    connected,
    connecting,
    address,
    connect,
    disconnect,
    isOpenMaskInstalled: !!provider,
  };
}