import { Toaster } from '@/shared/components/ui/toaster';
import { NextAuthProvider } from '@/shared/layout';
import ReactQueryProvider from '@/shared/layout/react-query-provider';
import { cn } from '@/shared/utils/commons';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import { Toaster as RHToaster } from 'react-hot-toast';
import '../styles/globals.css';

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  variable: '--playfair-display',
});

const source_sans_3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--source-sans-3',
});

export const metadata = {
  title: 'Comfico',
  description: 'Elevate Your Space with Timeless Style.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(source_sans_3.variable, playfair_display.variable)}>
      <body className={cn('bg-white font-source-sans-3')}>
        <Toaster />
        <RHToaster />
        <ReactQueryProvider>
          <NextAuthProvider>{children}</NextAuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
