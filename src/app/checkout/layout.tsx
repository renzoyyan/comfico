import { cn } from '@/shared/utils/commons';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <body className={cn('bg-[#fefcfa] font-source-sans-3')}>{children}</body>;
}
