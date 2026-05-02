import Image from 'next/image';

export default function BottomContactBlock() {
  return (
    <section className="mt-0 bg-white py-10" data-animate>
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl bg-white/80 shadow-xl border border-white/70 px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm md:text-base font-semibold italic uppercase tracking-[0.18em] text-[#4C2440]">
            Залишилися запитання?
          </p>
          <a
            href="https://t.me/JuliButenko"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm md:text-base font-semibold tracking-[0.18em] uppercase whitespace-nowrap transition-colors"
            style={{
              background: 'rgba(255, 219, 236, 0.92)',
              borderColor: 'rgba(255, 219, 236, 0.92)',
              borderWidth: 1,
              color: '#4C2440',
            }}
          >
            Напишіть нам
          </a>
        </div>

        <div className="mt-3 mb-2 flex justify-center">
          <Image
            src="/logo-neurofit.png"
            alt="NeuroFit — Neuro-Pilates"
            width={192}
            height={192}
            className="rounded-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

