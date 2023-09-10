import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  async function middleware(req) {
    const haveToken = Boolean(req.nextauth.token);

    if (!haveToken) {
      return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
  },

  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/my-orders/:path*'],
};
