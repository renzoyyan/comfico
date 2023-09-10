'use client';

import { QueryClient } from '@tanstack/react-query';
import { ReactNode, createContext, useContext, useState } from 'react';

export const QueryClientInstanceContext = createContext<{ queryClient: QueryClient | null }>({
  queryClient: null,
});

export const QueryClientInstanceProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: 2,
        },
      },
    })
  );

  return (
    <QueryClientInstanceContext.Provider value={{ queryClient }}>
      {children}
    </QueryClientInstanceContext.Provider>
  );
};

export const useQueryClientInstance = (): { queryClient: QueryClient } => {
  const { queryClient } = useContext(QueryClientInstanceContext);

  if (!queryClient) {
    throw new Error('No QueryClientInstanceProvider found');
  }

  return { queryClient };
};
