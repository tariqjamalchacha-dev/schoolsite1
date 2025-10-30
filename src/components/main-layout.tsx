"use client";

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <main className={cn("flex-grow", !isHomePage && "container mx-auto px-4 py-8")}>
      {children}
    </main>
  );
}
