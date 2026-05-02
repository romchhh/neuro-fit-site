import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const FB_PIXEL_ID = "4377743155875736";
const GA_MEASUREMENT_ID = "G-QMPMX0BGVM";
const GTM_ID = "GTM-NKRVKDT3";

const siteUrl = process.env.SITE_URL || "https://neuro-fit-site.vercel.app";
const siteName = "NeuroFit — Neuro-Pilates";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "NeuroFit — Neuro-Pilates: онлайн-пілатес, нервова система і стійкий результат",
    template: "%s | NeuroFit — Neuro-Pilates",
  },
  description:
    "NeuroFit — Neuro-Pilates: авторські онлайн-програми на основі пілатесу та нейрофітнесу. Постава, стабільність, координація й ресурс без перевантаження.",
  keywords: [
    "NeuroFit",
    "Neuro-Pilates",
    "нейропілатес",
    "пілатес онлайн",
    "нейрофітнес",
    "пілатес і мозок",
    "здоров'я спини",
    "усвідомлений рух",
    "онлайн тренування",
    "Юлія Бутенко",
  ],
  authors: [{ name: "NeuroFit — Neuro-Pilates" }],
  creator: "NeuroFit — Neuro-Pilates",
  publisher: "NeuroFit — Neuro-Pilates",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title:
      "NeuroFit — Neuro-Pilates: онлайн-пілатес, нервова система і стійкий результат",
    description:
      "Пілатес і нейрофітнес у прогресії: для тих, хто хоче тренуватися розумно, знімати напругу та відчувати тіло.",
    images: [
      {
        url: "/hero-desktop.jpg",
        width: 1200,
        height: 630,
        alt: "NeuroFit — Neuro-Pilates: онлайн-пілатес і нейрофітнес",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "NeuroFit — Neuro-Pilates: онлайн-пілатес, нервова система і стійкий результат",
    description:
      "Пілатес і нейрофітнес онлайн: спина, стабільність, координація та менше стресу.",
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
      <head>
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
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
