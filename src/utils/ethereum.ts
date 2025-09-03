import { mainnet, sepolia, polygon } from 'wagmi/chains';

export type SupportedChainId = typeof mainnet.id | typeof sepolia.id | typeof polygon.id;

export function isSupportedChainId(chainId: number): chainId is SupportedChainId {
  return chainId === mainnet.id || chainId === sepolia.id || chainId === polygon.id;
}