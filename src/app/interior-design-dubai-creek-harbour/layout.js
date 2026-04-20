import '../globals.css';

export const metadata = {
  title: "Interior Design Dubai Creek Harbour Services - WE DO interiors",
  description:
    "Luxury interior design company in Dubai Creek Harbour delivering office, apartment & turnkey fit-outs. Schedule your free consultation today.",
  keywords:[
    "interior design company Dubai Creek Harbour",
    "interior design company in Creek Harbour",
    "office interior design Dubai Creek Harbour",
    "apartment interior design Dubai Creek Harbour",
    "interior fit out company Dubai Creek Harbour",
    "turnkey fit out Dubai Creek Harbour",
    "commercial interior design Dubai Creek Harbour",
    "luxury interior design Dubai",
    "renovation services Dubai Creek Harbour",
    "design and build company Dubai"
  ],
  metadataBase: new URL('https://wedointerior.ae/'),
  openGraph: {
    title: 'Interior Design Projects Dubai | We Do Interior Design & Fit-Out',
    description:
      'Explore luxury interior design and fit-out projects in Dubai by We Do Interior. Discover our residential, commercial, and hospitality portfolio.',
    url: 'https://wedointerior.ae/interior-design-dubai-creek-harbour',
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
    canonical: '/interior-design-dubai-creek-harbour',
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
                "streetAddress": "Dubai Creek Harbour",
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
              "name": "Interior Design Company in Dubai Creek Harbour",
              "url": "https://wedointerior.ae/interior-design-dubai-creek-harbour",
              "description": "Luxury interior design services in Dubai Creek Harbour including offices, apartments, cafes, restaurants, and travel agencies."
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
              "@id": "https://wedointerior.ae/interior-design-dubai-creek-harbour",
              "name": "WE DO Interior Design & Fitout",
              "image": "https://wedointerior.ae/og-image.jpg",
              "url": "https://wedointerior.ae/interior-design-dubai-creek-harbour",
              "telephone": "+971 058 807 5603",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dubai Creek Harbour",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              },
              "areaServed": [
                "Dubai Creek Harbour",
                "Downtown Dubai",
                "DIFC",
                "Dubai Mall",
                "Burj Khalifa",
                "Dubai Canal",
                "Al Wasl",
                "Sheikh Zayed Road"
              ],
              "serviceOffered": [
                {"@type": "Service","name": "Office Interior Design in Dubai Creek Harbour"},
                {"@type": "Service","name": "Apartment Interior Design in Dubai Creek Harbour"},
                {"@type": "Service","name": "Villa Interior Design In Dubai Creek Harbour"},
                {"@type": "Service","name": "Restaurant Interior Design In Dubai Creek Harbour"}
              ]
            })
          }}
        />

       

       
      </head>
      <body>{children}</body>
    </html>
  );
}
