'use client';

import { useSession } from 'next-auth/react';

export const useAuth = () => {
  const { data: session, ...options } = useSession();
  const user = session?.user;
  const access_token = user?.access_token;

  return { user, access_token, ...options };
};
