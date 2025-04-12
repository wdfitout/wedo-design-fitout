import "./globals.css";
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Interior Design Dubai | Luxury Fit-Out Services in UAE - WE DO Interior",
  description: "WE DO Interior Design Dubai offers luxury interior design & fit-out services for residential, commercial, and retail projects across the UAE. Contact us!",
};

// ✅ JSON-LD Structured Data
const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://wedointerior.ae/#about-us",
      "name": "WeDo Interiors",
      "url": "https://wedointerior.ae/",
      "telephone": "+971588075603",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wedointerior.ae/images/2wresidence.webp",
        "width": 1080,
        "height": 550,
        "caption": "WeDo Interior - Logo"
      },
      "sameAs": [
        "https://www.facebook.com/wedofitout",
        "https://www.instagram.com/wedo_interior/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://wedointerior.ae/#website",
      "url": "https://wedointerior.ae/",
      "name": "WeDo Interiors",
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://wedointerior.ae/#about-us"
      }
    }
  ]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* ✅ Meta Tags for Global Settings */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />

        {/* ✅ JSON-LD Structured Data (Moved to <head>) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

        {/* ✅ Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-PZSS6ZMR"
        />
      </Head>

      <body>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZSS6ZMR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* ✅ Google Analytics */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-11361089409" />
        <Script
          id="google-ads-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11361089409');
            `,
          }}
        />

        {children}
      </body>
    </html>
  );
}
