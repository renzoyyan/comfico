import { Toaster } from '@/shared/ui/toaster';
import '../styles/globals.css';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import { cn } from '@/shared/utils/commons';
import { Footer, Navbar } from '@/shared/ui/partials';

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
        {children}
      </body>
    </html>
  );
}
