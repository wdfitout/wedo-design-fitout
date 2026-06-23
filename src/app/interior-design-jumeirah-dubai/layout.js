import '../globals.css';

export const metadata = {
  title: "Best Interior Design Company in Jumeirah, Dubai - WE DO interiors",
  description:
    "Luxury interior design company in Jumeirah delivering premium residential, office & turnkey fit-out solutions. Schedule your free consultation today.",
  keywords: [
    "interior design company Jumeirah",
    "interior design company in Jumeirah Dubai",
    "office interior design Jumeirah",
    "apartment interior design Jumeirah",
    "interior fit out company Jumeirah",
    "turnkey fit out Jumeirah",
    "commercial interior design Jumeirah",
    "luxury interior design Dubai",
    "renovation services Jumeirah",
    "design and build company Dubai"
  ],
  metadataBase: new URL('https://wedointerior.ae/'),
  openGraph: {
    title: 'Interior Design in Jumeirah Dubai | WE DO Interior Design & Fit-Out',
    description:
      'Explore luxury interior design and fit-out services in Jumeirah Dubai by WE DO Interior Design & Fitout.',
    url: 'https://wedointerior.ae/interior-design-jumeirah-dubai',
    siteName: 'WE DO Interior Design & Fitout',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Interior Design Jumeirah Dubai',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design in Jumeirah Dubai | WE DO Interiors',
    description:
      'Luxury interior design & fit-out services in Jumeirah Dubai.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/interior-design-jumeirah-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                "streetAddress": "Jumeirah",
                "addressLocality": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              }
            })
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Interior Design Company in Jumeirah",
              "url": "https://wedointerior.ae/interior-design-jumeirah-dubai",
              "description":
                "Luxury interior design services in Jumeirah Dubai including villas, apartments, offices, and restaurants."
            })
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://wedointerior.ae/interior-design-jumeirah-dubai",
              "name": "WE DO Interior Design & Fitout",
              "image": "https://wedointerior.ae/og-image.jpg",
              "url": "https://wedointerior.ae/interior-design-jumeirah-dubai",
              "telephone": "+971 058 807 5603",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jumeirah",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              },
              "areaServed": [
                "Jumeirah",
                "Jumeirah 1",
                "Jumeirah 2",
                "Jumeirah Beach Road",
                "La Mer",
                "Umm Suqeim",
                "Al Wasl",
                "City Walk"
              ],
              "serviceOffered": [
                { "@type": "Service", "name": "Villa Interior Design in Jumeirah" },
                { "@type": "Service", "name": "Apartment Interior Design in Jumeirah" },
                { "@type": "Service", "name": "Office Interior Design in Jumeirah" },
                { "@type": "Service", "name": "Restaurant Interior Design in Jumeirah" }
              ]
            })
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does an interior design project in Jumeirah take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most interior design projects in Jumeirah take between 6 to 12 weeks depending on size and complexity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide villa interior design in Jumeirah?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in luxury villa interior design and turnkey fit-out services in Jumeirah Dubai."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you handle turnkey fit-out projects in Jumeirah?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide complete turnkey solutions including design, approvals, execution, and handover."
                  }
                }
              ]
            })
          }}
        />

      </head>

      <body>{children}</body>
    </html>
  );
}