'use client';

import { SessionProvider } from 'next-auth/react';
import type { PropsWithChildren } from 'react';

export const NextAuthProvider = ({ children }: PropsWithChildren) => {
  return <SessionProvider refetchOnWindowFocus={false}>{children}</SessionProvider>;
};
