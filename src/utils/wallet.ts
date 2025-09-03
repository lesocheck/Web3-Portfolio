export function formatAddress(address: string, length = 10): string {
  if (address.length <= length) return address;
  const start = Math.ceil(length / 2);
  const end = Math.floor(length / 2);
  return `${address.slice(0, start)}...${address.slice(-end)}`;
}