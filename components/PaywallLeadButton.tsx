'use client';

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { pushDataLayer } from '@/utils/dataLayer';

const FORM_ID = 'pre_payment_lead';

type PaywallLeadButtonProps = {
  productLabel: string;
  afterLeadSent: () => void | Promise<void>;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'children'>;

export default function PaywallLeadButton({
  productLabel,
  afterLeadSent,
  children,
  className,
  ...btnProps
}: PaywallLeadButtonProps) {
  const dialogTitleId = useId();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [telegram, setTelegram] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formStartSent = useRef(false);

  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) formStartSent.current = false;
  }, [open]);

  const onFormFieldFocus = useCallback(() => {
    if (formStartSent.current) return;
    formStartSent.current = true;
    pushDataLayer({
      event: 'form_start',
      form_id: FORM_ID,
      form_name: 'Перед оплатою',
      product_label: productLabel,
    });
  }, [productLabel]);

  const close = useCallback(() => {
    if (sending) return;
    setOpen(false);
    setError(null);
  }, [sending]);

  const submit = useCallback(async () => {
    setError(null);
    const n = name.trim();
    const t = telegram.trim();
    if (n.length < 2 || t.length < 2) {
      setError("Заповніть ім'я та контакт (Telegram або телефон)");
      return;
    }
    setSending(true);
    try {
      const res = await fetch('/api/telegram/pre-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: n, telegram: t, productLabel }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error || 'Помилка відправки');
        return;
      }
      pushDataLayer({
        event: 'form_submit',
        form_id: FORM_ID,
        form_name: 'Перед оплатою',
        product_label: productLabel,
      });
      setOpen(false);
      setName('');
      setTelegram('');
      await afterLeadSent();
    } catch {
      setError('Немає зв’язку з сервером. Спробуйте ще раз.');
    } finally {
      setSending(false);
    }
  }, [afterLeadSent, name, productLabel, telegram]);

  return (
    <>
      <button type="button" className={className} {...btnProps} onClick={() => setOpen(true)}>
        {children}
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex max-h-[100dvh] items-center justify-center overflow-y-auto overscroll-contain bg-black/45 p-4 backdrop-blur-sm"
          role="presentation"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            className="my-auto w-full max-w-md rounded-3xl border border-[#E8C4E6] bg-white p-6 shadow-[0_24px_64px_rgba(128,93,127,0.25)] md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id={dialogTitleId} className="mb-1 text-center text-lg font-semibold text-[#5a3d59] md:text-xl">
              Перед оплатою
            </h2>
            <p className="mb-5 text-center text-sm text-neutral-600">
              Вкажіть ім’я та контакт: нік у Telegram або номер телефону — надішлемо менеджеру, після цього
              відкриється оплата.
            </p>

            <label className="mb-3 block text-sm font-medium text-[#5a3d59]">
              Ім’я
              <input
                type="text"
                name="lead-name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={onFormFieldFocus}
                className="mt-1.5 w-full rounded-2xl border border-[#E8C4E6] bg-[#FFFBFE] px-4 py-3 text-[#2a2a2a] outline-none ring-[#D7ABD6] focus:ring-2"
                placeholder="Олена"
                disabled={sending}
              />
            </label>

            <label className="mb-5 block text-sm font-medium text-[#5a3d59]">
              Telegram або телефон
              <input
                type="text"
                name="lead-telegram"
                inputMode="text"
                autoComplete="on"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                onFocus={onFormFieldFocus}
                className="mt-1.5 w-full rounded-2xl border border-[#E8C4E6] bg-[#FFFBFE] px-4 py-3 text-[#2a2a2a] outline-none ring-[#D7ABD6] focus:ring-2"
                placeholder="@username, +380… або 067…"
                disabled={sending}
              />
            </label>

            {error ? (
              <p className="mb-3 text-center text-sm text-red-600" role="alert">
                {error}
              </p>
            ) : null}

            <div className="flex justify-center">
              <button
                type="button"
                onClick={submit}
                disabled={sending}
                className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-[#FCE0FF] to-[#FFBEFE] px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#805D7F] shadow-md transition hover:opacity-95 disabled:opacity-60"
              >
                {sending ? 'Надсилання…' : 'Далі до оплати'}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
