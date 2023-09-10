'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  QueryClientInstanceProvider,
  useQueryClientInstance,
} from '../context/query-client-context';

/** To be able access queryClient from the QueryClientInstanceContext */

function AppQueryClientWrapper({ children }: { children: React.ReactNode }) {
  const { queryClient } = useQueryClientInstance();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}

function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientInstanceProvider>
      <AppQueryClientWrapper>{children}</AppQueryClientWrapper>
    </QueryClientInstanceProvider>
  );
}

export default ReactQueryProvider;
