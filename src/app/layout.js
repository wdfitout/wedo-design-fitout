import "./globals.css";
import Script from "next/script";

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
      <body>
        {/* ✅ JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

        {/* ✅ Google Tag Manager - Body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZSS6ZMR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* ✅ Google Tag Manager - Script */}
        <Script 
          id="gtm-script" 
          strategy="lazyOnload" 
          src="https://www.googletagmanager.com/gtm.js?id=GTM-PZSS6ZMR"
        />

        {/* ✅ Google Analytics */}
        <Script 
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-11361089409"
        />
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
