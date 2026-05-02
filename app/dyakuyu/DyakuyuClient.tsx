'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { pushDataLayer } from '@/utils/dataLayer';

const MARKETING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
  'msclkid',
] as const;

export default function DyakuyuClient() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const dedupeKey = `dyakuyu_dl${window.location.pathname}${window.location.search}`;
    if (sessionStorage.getItem(dedupeKey)) return;

    const payload: Record<string, unknown> = {
      event: 'thank_you',
      page_path: '/dyakuyu',
      page_location: window.location.href,
    };

    for (const key of MARKETING_PARAMS) {
      const v = searchParams.get(key);
      if (v) payload[key] = v;
    }

    pushDataLayer(payload);
    sessionStorage.setItem(dedupeKey, '1');
  }, [searchParams]);

  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-to-b from-[#ffe9ff] via-[#f5e8ff] to-[#f3f1f7] px-4 py-16">
      <section className="w-full max-w-lg rounded-[32px] border border-white/80 bg-white/95 px-8 py-10 text-center shadow-[0_28px_80px_rgba(116,63,135,0.18)]">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#805D7F]">NeuroFit — Neuro-Pilates</p>
        <h1 className="mb-4 font-semibold text-[#5a3d59] text-2xl md:text-3xl">Дякуємо!</h1>
        <p className="mb-8 text-[15px] leading-relaxed text-neutral-600">
          Ваше замовлення зафіксовано. Якщо потрібна допомога з доступом — напишіть нам у підтримку.
        </p>
        <Link
          href="/"
          className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-[#FCE0FF] to-[#FFBEFE] px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#805D7F] shadow-md transition hover:opacity-95"
        >
          На головну
        </Link>
      </section>
    </main>
  );
}
