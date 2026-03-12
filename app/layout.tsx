import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.SITE_URL || "https://neuro-fit-site.vercel.app";
const siteName = "NeuroFit — Smart Movement";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NeuroFit — унікальна система довголіття через рух і мозок",
    template: "%s | NeuroFit",
  },
  description:
    "NeuroFit — авторська система тренувань на основі пілатесу та нейрофітнесу. Розумні тренування для здорової спини, нервової системи та довголіття.",
  keywords: [
    "NeuroFit",
    "нейрофітнес",
    "пілатес онлайн",
    "здоров'я спини",
    "усвідомлений рух",
    "онлайн тренування",
    "Юлія Бутенко",
    "Smart Movement",
  ],
  authors: [{ name: "NeuroFit — Smart Movement" }],
  creator: "NeuroFit — Smart Movement",
  publisher: "NeuroFit — Smart Movement",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "NeuroFit — унікальна система довголіття через рух і мозок",
    description:
      "Авторська програма на стику пілатесу та нейрофітнесу для тих, хто хоче тренуватися розумно й без болю.",
    images: [
      {
        url: "/hero-desktop.jpg",
        width: 1200,
        height: 630,
        alt: "NeuroFit — система довголіття через рух і мозок",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroFit — унікальна система довголіття через рух і мозок",
    description:
      "Розумні тренування для здорової спини, нервової системи та довголіття.",
    images: ["/hero-desktop.jpg"],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "uk-UA": "/",
    },
  },
  icons: {
    icon: "/logo-neurofit.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
