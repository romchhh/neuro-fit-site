import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const FB_PIXEL_ID = "4377743155875736";

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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FB_PIXEL_ID}');
fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
