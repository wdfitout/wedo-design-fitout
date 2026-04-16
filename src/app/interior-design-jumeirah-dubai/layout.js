import '../globals.css';

export const metadata = {
  title: "Best Interior Design Company in Business Bay, Dubai - WE DO interiors",
  description:
    "Luxury interior design company in Business Bay delivering office, apartment & turnkey fit-outs. Schedule your free consultation today.",
  keywords:[
    "interior design company Business Bay",
    "interior design company in Business Bay Dubai",
    "office interior design Business Bay",
    "apartment interior design Business Bay",
    "interior fit out company Business Bay",
    "turnkey fit out Business Bay",
    "commercial interior design Business Bay",
    "luxury interior design Dubai",
    "renovation services Business Bay",
    "design and build company Dubai"
  ],
  metadataBase: new URL('https://wedointerior.ae/'),
  openGraph: {
    title: 'Interior Design Projects Dubai | We Do Interior Design & Fit-Out',
    description:
      'Explore luxury interior design and fit-out projects in Dubai by We Do Interior. Discover our residential, commercial, and hospitality portfolio.',
    url: 'https://wedointerior.ae/interior-design-company-business-bay',
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
      'Explore luxury interior design and fit-out projects in Dubai by We Do Interior. Discover our residential, commercial, and hospitality portfolio.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/interior-design-company-business-bay',
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
                "streetAddress": "Business Bay",
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
              "name": "Interior Design Company in Business Bay",
              "url": "https://wedointerior.ae/interior-design-company-business-bay",
              "description": "Luxury interior design services in Business Bay Dubai including offices, apartments, cafes, restaurants, and travel agencies."
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
              "@id": "https://wedointerior.ae/interior-design-company-business-bay",
              "name": "WE DO Interior Design & Fitout",
              "image": "https://wedointerior.ae/og-image.jpg",
              "url": "https://wedointerior.ae/interior-design-company-business-bay",
              "telephone": "+971 058 807 5603",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Business Bay",
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
                {"@type": "Service","name": "Office Interior Design in Business Bay"},
                {"@type": "Service","name": "Apartment Interior Design in Business Bay"},
                {"@type": "Service","name": "Villa Interior Design In Business Bay"},
                {"@type": "Service","name": "Restaurant Interior Design In Business Bay"}
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
                  "name": "How long does an office fit-out in Business Bay take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Office fit-outs typically take six to twelve weeks depending on the project size and complexity. All required DCD and authority approvals are managed by our team."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide turnkey fit-out services in Business Bay?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide complete turnkey fit-out services including design, approvals, execution, and final handover."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you design luxury apartments in Business Bay?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in apartment interior design and luxury residential interiors in Business Bay, creating elegant and functional spaces."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are you a leading interior design company in Business Bay?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WE DO Interior Design & Fitout is recognized for delivering high-quality residential and commercial interior design and fit-out projects in Business Bay."
                  }
                }
              ]
            })
          }}
        />

        {/* CollectionPage Schema with Business Bay Projects */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Business Bay Interior Design Projects",
              "url": "https://wedointerior.ae/interior-design-company-business-bay",
              "description": "A curated collection of luxury interior design and fit-out projects in Business Bay by WE DO Interior Design & Fitout.",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Business Bay Apartment Interior Design",
                    "url": "https://wedointerior.ae/business-bay-apartment"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Business Bay Office Fit-Out",
                    "url": "https://wedointerior.ae/business-bay-office-fit-out"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Business Bay Cafe Interior Design",
                    "url": "https://wedointerior.ae/business-bay-cafe-interior"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Business Bay Restaurant Interior Design",
                    "url": "https://wedointerior.ae/business-bay-restaurant"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Business Bay Travel Agency Interior Design",
                    "url": "https://wedointerior.ae/business-bay-travel-agency"
                  }
                ]
              }
            })
          }}
        />

      </head>
      <body>{children}</body>
    </html>
  );
}
