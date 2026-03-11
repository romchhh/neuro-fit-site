"use client";

import { useEffect, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ScrollRevealProvider({ children }: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            // якщо хочемо одноразову анімацію — відключаємо далі
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}

