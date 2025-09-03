'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { useState, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { config } from '@/lib/wagmi';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 10,
            retry: (failureCount, error) => {
              if (error instanceof Error && 'status' in error) {
                const status = error.status as number;
                if (status >= 400 && status < 500) return false;
              }
              return failureCount < 3;
            },
            refetchOnWindowFocus: process.env.NODE_ENV === 'production',
          },
          mutations: {
            retry: 1,
          },
        },
      })
  );

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            className: 'bg-white text-gray-900 border border-gray-200 rounded-lg text-sm shadow-lg',
            success: {
              duration: 3000,
              iconTheme: {
                primary: 'var(--success-500)',
                secondary: 'white',
              },
              className: 'bg-white text-gray-900 border border-green-500 rounded-lg text-sm shadow-lg',
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: 'var(--error-500)',
                secondary: 'white',
              },
              className: 'bg-white text-gray-900 border border-red-500 rounded-lg text-sm shadow-lg',
            },
            loading: {
              duration: Infinity,
            },
          }}
        />
      </QueryClientProvider>
    </WagmiProvider>
  );
}