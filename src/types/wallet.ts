export const WalletNetwork = {
  ETHEREUM: 'ethereum',
  SOLANA: 'solana', 
  TON: 'ton'
} as const;

export type WalletNetwork = (typeof WalletNetwork)[keyof typeof WalletNetwork];

export const WalletStatus = {
  DISCONNECTED: 'disconnected',
  CONNECTING: 'connecting',
  CONNECTED: 'connected',
  ERROR: 'error'
} as const;

export type WalletStatus = (typeof WalletStatus)[keyof typeof WalletStatus];

export const TransactionStatus = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed', 
  FAILED: 'failed'
} as const;

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus];

export interface BaseWalletConnection {
  network: WalletNetwork;
  status: WalletStatus;
  address: string | null;
  balance: string | null;
  error: string | null;
}

export interface EthereumProvider {
  isMetaMask?: boolean;
  isCoinbaseWallet?: boolean;
  isRainbow?: boolean;
  request(args: { method: string; params?: unknown[] }): Promise<unknown>;
  on(event: string, handler: (...args: unknown[]) => void): void;
  removeListener(event: string, handler: (...args: unknown[]) => void): void;
}

export interface SolanaWallet {
  publicKey: {
    toString(): string;
    toBase58(): string;
  } | null;
  connected: boolean;
  connecting: boolean;
  isPhantom?: boolean;
  disconnect(): Promise<void>;
  connect(): Promise<void>;
  signTransaction?(transaction: unknown): Promise<unknown>;
  signAllTransactions?(transactions: unknown[]): Promise<unknown[]>;
}

export interface TonWallet {
  account: {
    address: string;
    chain: string;
    walletStateInit: string;
  } | null;
  connected: boolean;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  sendTransaction(transaction: unknown): Promise<unknown>;
}

export interface EthereumConnection extends BaseWalletConnection {
  network: typeof WalletNetwork.ETHEREUM;
  chainId: number | null;
  connector: string | null;
  provider: EthereumProvider | null;
}

export interface SolanaConnection extends BaseWalletConnection {
  network: typeof WalletNetwork.SOLANA;
  publicKey: string | null;
  wallet: SolanaWallet | null;
}

export interface TonConnection extends BaseWalletConnection {
  network: typeof WalletNetwork.TON;
  account: {
    address: string;
    chain: string;
    walletStateInit: string;
  } | null;
  wallet: TonWallet | null;
}

export type WalletConnection = EthereumConnection | SolanaConnection | TonConnection;

export interface WalletOption {
  id: string;
  name: string;
  network: WalletNetwork;
  icon: string;
  description: string;
  installed?: boolean;
}

export interface EthereumTransaction {
  to: string;
  value: string;
  data?: string;
  gasLimit?: string;
  gasPrice?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
}

export interface SolanaTransaction {
  instructions: {
    programId: string;
    keys: Array<{
      pubkey: string;
      isSigner: boolean;
      isWritable: boolean;
    }>;
    data: Buffer;
  }[];
  feePayer?: string;
}

export interface TonTransaction {
  to: string;
  value: string;
  data?: string;
  stateInit?: string;
}

export interface TransactionResult {
  hash: string;
  network: WalletNetwork;
  status: TransactionStatus;
  confirmations?: number;
  blockNumber?: number;
  gasUsed?: string;
  fee?: string;
}

export interface DatabaseTransaction {
  id: string;
  userAddress: string;
  toAddress: string;
  amount: string;
  txHash: string;
  network: WalletNetwork;
  status: TransactionStatus;
  createdAt: string;
  updatedAt: string;
}

declare global {
  interface Window {
    solana?: SolanaWallet & { isPhantom?: boolean };
    phantom?: {
      solana?: SolanaWallet;
    };
    solflare?: SolanaWallet;
    backpack?: SolanaWallet;
    ton?: {
      isOpenMask: boolean;
      isConnected: boolean;
      send(method: string, params: unknown[]): Promise<unknown>;
      addListener(event: string, handler: (...args: unknown[]) => void): void;
      removeListener(event: string, handler: (...args: unknown[]) => void): void;
    };
    tonkeeper?: TonWallet;
    tonhub?: TonWallet;
    openmask?: TonWallet;
  }
}

export {};