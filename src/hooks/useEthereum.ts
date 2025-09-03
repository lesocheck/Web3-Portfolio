import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi';
import { formatEther } from 'viem';

export function useEthereum() {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({ address });
  const { connect, connectors, isPending, error } = useConnect();
  const { disconnect } = useDisconnect();

  const connectMetaMask = () => {
    console.log('Available connectors:', connectors.map(c => ({ id: c.id, name: c.name })));
    
    const injectedConnector = connectors.find(c => c.id === 'injected');
    if (injectedConnector) {
      connect({ connector: injectedConnector });
    } 
  };

  const balanceFormatted = balance ? formatEther(balance.value) : '0';

  return {
    address,
    isConnected,
    isConnecting: isPending,
    balance: balanceFormatted,
    connectMetaMask,
    disconnect,
    error: error?.message || null,
  };
}