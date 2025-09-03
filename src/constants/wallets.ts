import { WalletOption, WalletNetwork } from '@/types';

// Ethereum wallet options
export const ETHEREUM_WALLETS: WalletOption[] = [
  {
    id: 'metamask',
    name: 'MetaMask',
    network: WalletNetwork.ETHEREUM,
    icon: '🦊',
    description: 'Connect with the most popular Ethereum wallet'
  },
  {
    id: 'walletconnect',
    name: 'WalletConnect',
    network: WalletNetwork.ETHEREUM,
    icon: '🔗',
    description: 'Connect with mobile wallets via QR code'
  },
  {
    id: 'coinbase',
    name: 'Coinbase Wallet',
    network: WalletNetwork.ETHEREUM,
    icon: '🔵',
    description: 'Connect with Coinbase Wallet'
  },
  {
    id: 'rainbow',
    name: 'Rainbow',
    network: WalletNetwork.ETHEREUM,
    icon: '🌈',
    description: 'Connect with Rainbow wallet'
  }
];

// Solana wallet options
export const SOLANA_WALLETS: WalletOption[] = [
  {
    id: 'phantom',
    name: 'Phantom',
    network: WalletNetwork.SOLANA,
    icon: '👻',
    description: 'The most popular Solana wallet'
  },
  {
    id: 'solflare',
    name: 'Solflare',
    network: WalletNetwork.SOLANA,
    icon: '☀️',
    description: 'Secure Solana wallet with DeFi features'
  },
  {
    id: 'backpack',
    name: 'Backpack',
    network: WalletNetwork.SOLANA,
    icon: '🎒',
    description: 'Modern Solana wallet and xNFT platform'
  }
];

export const TON_WALLETS: WalletOption[] = [
  {
    id: 'openmask',
    name: 'OpenMask',
    network: WalletNetwork.TON,
    icon: '🔓',
    description: 'Browser extension for TON'
  }
];

// Combined wallet options
export const ALL_WALLETS: WalletOption[] = [
  ...ETHEREUM_WALLETS,
  ...SOLANA_WALLETS,
  ...TON_WALLETS
];

// Network configurations
export const ETHEREUM_NETWORKS: Record<number, {
  chainId: number;
  name: string;
  rpcUrl: string;
  blockExplorer: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
}> = {
  1: {
    chainId: 1,
    name: 'Ethereum Mainnet',
    rpcUrl: 'https://mainnet.infura.io/v3/',
    blockExplorer: 'https://etherscan.io',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
  },
  11155111: {
    chainId: 11155111,
    name: 'Sepolia Testnet',
    rpcUrl: 'https://sepolia.infura.io/v3/',
    blockExplorer: 'https://sepolia.etherscan.io',
    nativeCurrency: {
      name: 'Sepolia Ether',
      symbol: 'ETH',
      decimals: 18,
    },
  },
  137: {
    chainId: 137,
    name: 'Polygon Mainnet',
    rpcUrl: 'https://polygon-rpc.com',
    blockExplorer: 'https://polygonscan.com',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
  },
} as const;

export const SOLANA_NETWORKS: Record<string, {
  name: string;
  rpcUrl: string;
  explorer: string;
}> = {
  mainnet: {
    name: 'Solana Mainnet',
    rpcUrl: 'https://api.mainnet-beta.solana.com',
    explorer: 'https://explorer.solana.com'
  },
  devnet: {
    name: 'Solana Devnet', 
    rpcUrl: 'https://api.devnet.solana.com',
    explorer: 'https://explorer.solana.com?cluster=devnet'
  }
} as const;

export const TON_NETWORKS: Record<string, {
  name: string;
  explorer: string;
}> = {
  mainnet: {
    name: 'TON Mainnet',
    explorer: 'https://tonviewer.com'
  },
  testnet: {
    name: 'TON Testnet',
    explorer: 'https://testnet.tonviewer.com'
  }
} as const;