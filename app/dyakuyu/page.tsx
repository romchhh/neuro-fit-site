import type { Metadata } from 'next';
import { Suspense } from 'react';
import DyakuyuClient from './DyakuyuClient';

export const metadata: Metadata = {
  title: 'Дякуємо',
  description: 'Сторінка подяки після оплати NeuroFit.',
  robots: { index: false, follow: true },
};

function DyakuyuFallback() {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-gradient-to-b from-[#ffe9ff] to-[#f3f1f7] px-4">
      <p className="text-neutral-500">Завантаження…</p>
    </main>
  );
}

export default function DyakuyuPage() {
  return (
    <Suspense fallback={<DyakuyuFallback />}>
      <DyakuyuClient />
    </Suspense>
  );
}
