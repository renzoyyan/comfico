import NextAuth from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      first_name: string;
      last_name: string;
      email: string;
      profile_image?: string;
      contact_number?: string;
      access_token: string;
    };
  }
}
