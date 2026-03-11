import type { NextRequest } from "next/server";

export const runtime = "edge";

export function GET(_req: NextRequest) {
  const body = [
    "# AI Crawling & Usage Guidelines for NeuroFit",
    "",
    "Site: https://neuro-fit-site.vercel.app",
    "",
    "1. Allowed:",
    "- Indexing public marketing content (тексти про програми, FAQ, відгуки).",
    "- Використання фрагментів тексту для пошуку та навігації всередині AI‑систем.",
    "",
    "2. Заборонено без окремого письмового дозволу:",
    "- Масове копіювання та повторна публікація контенту сайту.",
    "- Використання контенту як навчального датасету для загального призначення моделей.",
    "- Будь‑яке комерційне перевикористання контенту поза сервісом, який здійснює індексацію.",
    "",
    "3. Контакти для запитів щодо AI‑використання контенту:",
    "- Email: hello@neurofit.com",
    "- Instagram: @neurofit.smartmovement",
    "",
    "Оновлено: 2026‑03‑11",
  ].join("\n");

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

