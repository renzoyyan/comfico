import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import api from './api';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await api.post('/api/auth/login', {
          email: credentials?.email,
          password: credentials?.password,
        });

        const user = res.data;
        const status = res.status;

        if (status !== 200) {
          throw new Error(user);
        }

        return user;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    maxAge: 60 * 60 * 24, // 1 day session
  },

  pages: {
    signIn: '/',
    signOut: '/',
    error: '/',
  },

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;

      return session;
    },
  },
};
