import { useCallback, useEffect, useState } from 'react';
import { STORAGE_KEYS } from '@/constants/storage';

interface PhantomWallet {
  isPhantom: boolean;
  publicKey: {
    toString(): string;
  } | null;
  connected: boolean;
  connect(): Promise<{ publicKey: { toString(): string } }>;
  disconnect(): Promise<void>;
}

export function useSolana() {
  const [wallet, setWallet] = useState<PhantomWallet | null>(null);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initWallet = async () => {
      if (typeof window === 'undefined' || !window.solana) {
        setInitialized(true);
        return;
      }

      const solanaWallet = window.solana as unknown as PhantomWallet;
      if (!solanaWallet.isPhantom) {
        setInitialized(true);
        return;
      }
      
      setWallet(solanaWallet);
      
      const shouldAutoConnect = localStorage.getItem(STORAGE_KEYS.PHANTOM_WALLET_AUTO_CONNECT) === 'true';
      
      if (shouldAutoConnect && !solanaWallet.connected) {
        try {
          setConnecting(true);
          const response = await solanaWallet.connect();
          setConnected(true);
          setPublicKey(response.publicKey.toString());
        } catch (error) {
          console.log(error)
          localStorage.removeItem(STORAGE_KEYS.PHANTOM_WALLET_AUTO_CONNECT);
        } finally {
          setConnecting(false);
        }
      } else if (solanaWallet.connected && solanaWallet.publicKey) {
        setConnected(true);
        setPublicKey(solanaWallet.publicKey.toString());
        localStorage.setItem(STORAGE_KEYS.PHANTOM_WALLET_AUTO_CONNECT, 'true');
      }
      
      setInitialized(true);
    };

    const timeout = setTimeout(initWallet, 100);
    return () => clearTimeout(timeout);
  }, []);

  const connect = useCallback(async () => {
    if (!wallet) return;

    try {
      setConnecting(true);
      const response = await wallet.connect();
      setConnected(true);
      setPublicKey(response.publicKey.toString());
      localStorage.setItem(STORAGE_KEYS.PHANTOM_WALLET_AUTO_CONNECT, 'true');
    } catch (error) {
      console.error('Failed to connect to Phantom:', error);
    } finally {
      setConnecting(false);
    }
  }, [wallet]);

  const disconnect = useCallback(async () => {
    if (!wallet) return;

    try {
      await wallet.disconnect();
      setConnected(false);
      setPublicKey(null);
      localStorage.removeItem(STORAGE_KEYS.PHANTOM_WALLET_AUTO_CONNECT);
    } catch (error) {
      console.error('Failed to disconnect from Phantom:', error);
    }
  }, [wallet]);

  return {
    wallet,
    connected,
    connecting,
    publicKey,
    connect,
    disconnect,
    isPhantomInstalled: !!wallet,
    initialized,
  };
}