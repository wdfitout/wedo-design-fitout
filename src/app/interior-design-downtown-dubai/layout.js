import '../globals.css';
import Script from "next/script";

export const metadata = {
  title: "Interior Design Downtown Dubai - Residential & Commercial Experts",
  description:
    "Premium Interior Design Downtown Dubai for homes & offices. WE DO delivers luxury fit-out, modern interiors & turnkey solutions. Call now!",

  keywords: [
    'Interior Design Downtown Dubai',
    'interior design company in Downtown Dubai',
    'interior designers Downtown Dubai',
    'interior fit-out companies in Dubai',
    'interior design companies in Dubai',
    'luxury interior design Downtown Dubai',
    'residential interior design Downtown Dubai',
    'commercial interior design Dubai',
    'office interior design Dubai',
    'restaurant interior design Dubai',
    'fit-out company Downtown Dubai',
    'interior design and fit out companies in Dubai',
    'best interior designers in Dubai',
    'turnkey interior solutions Dubai',
    'renovation and remodeling Dubai'
  ],

  metadataBase: new URL('https://wedointerior.ae/'),

  openGraph: {
    title: 'Best Interior Design Company in DownTown, Dubai - WE DO interiors',
    description:
      'Premium Interior Design Downtown Dubai for homes & offices. WE DO delivers luxury fit-out, modern interiors & turnkey solutions. Call now!',
    url: 'https://wedointerior.ae/interior-design-downtown-dubai',
    siteName: 'WE DO Interior Design & Fitout',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Interior Design Project Banner',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Projects Dubai | We Do Interior Design & Fit-Out',
    description:
      'Premium Interior Design Downtown Dubai for homes & offices. WE DO delivers luxury fit-out, modern interiors & turnkey solutions. Call now!',
    images: ['/og-image.jpg'],
  },

  alternates: {
    canonical: '/interior-design-downtown-dubai',
  },

  // ✅ Proper App Router way
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },

  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WE DO Interior Design & Fitout",
    "url": "https://wedointerior.ae/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://wedointerior.ae/logo-s-Black.png"
    },
    "sameAs": [
      "https://www.instagram.com/we.do.uae",
      "https://www.facebook.com/wedointerior"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971 058 807 5603",
      "contactType": "Customer Service",
      "areaServed": "AE",
      "availableLanguage": ["English", "Arabic"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Downtown",
      "addressLocality": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Interior Design Company in Downtown",
    "url": "https://wedointerior.ae/interior-design-downtown-dubai",
    "description":
      "Premium Interior Design Downtown Dubai for homes & offices. WE DO delivers luxury fit-out, modern interiors & turnkey solutions. Call now!"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://wedointerior.ae/interior-design-downtown-dubai",
    "name": "WE DO Interior Design & Fitout",
    "image": "https://wedointerior.ae/og-image.jpg",
    "url": "https://wedointerior.ae/interior-design-downtown-dubai",
    "telephone": "+971 058 807 5603",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "DownTown",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "areaServed": [
      "Business Bay",
      "Downtown Dubai",
      "DIFC",
      "Dubai Mall",
      "Burj Khalifa",
      "Dubai Canal",
      "Al Wasl",
      "Sheikh Zayed Road"
    ],
    "serviceOffered": [
      { "@type": "Service", "name": "Office Interior Design in DownTown Dubai" },
      { "@type": "Service", "name": "Apartment Interior Design in DownTown Dubai" },
      { "@type": "Service", "name": "Villa Interior Design In DownTown Dubai" },
      { "@type": "Service", "name": "Restaurant Interior Design In DownTown Dubai" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does interior design cost in Downtown Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Prices depend on the nature of the project, good-quality materials, and design requirements. Luxury designs usually require larger budgets than usual."
        }
      },
      {
        "@type": "Question",
        "name": "How long does fit-out take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most fit-outs take between 4 and 12 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide complete interior design services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We are one of the best interior designers and fit-out companies in Dubai providing a comprehensive range of services."
        }
      },
      {
        "@type": "Question",
        "name": "How can I select the best interior designer in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Select an experienced interior designer with a good reputation among best interior designers in Dubai."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="downtown-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            organizationSchema,
            webPageSchema,
            localBusinessSchema,
            faqSchema
          }),
        }}
      />

      {children}
    </>
  );
}