import { cn } from '@/shared/utils/commons';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div className={cn('h-screen bg-gray-100 font-source-sans-3')}>{children}</div>;
}
