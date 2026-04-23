import '../globals.css';

export const metadata = {
  title: "Apartment Projects in Dubai | Interior Design, Renovation & Fit-Out",
  description:
    "Explore apartment projects in Dubai by WE DO Interior Design & Fitout. We provide complete apartment interior design, renovation, and fit-out services.",
 keywords: [
  'Apartment Projects Dubai',
  'Apartment Interior Design Dubai',
  'Apartment Renovation Dubai',
  'Apartment Fit-Out Dubai',
  'Apartment Interior Design Company Dubai',
  'Residential Apartment Projects UAE',
  'Modern Apartment Interiors Dubai',
  'Luxury Apartment Design Dubai',
  'We Do Interior Design Apartment Projects',
  'Dubai Apartment Interior Design Services',
],
 publisher: [
  'WEDO Interior Design & Fitout',
 ],
  metadataBase: new URL('https://wedointerior.ae/'),
  openGraph: {
    title: 'Interior Design apartment Projects Dubai | We Do',
    description:
      'Explore apartment interior design and fit-out projects in Dubai by We Do Interior. Discover our portfolio.',
    url: 'https://wedointerior.ae/apartment-projects/',
    siteName: 'we do interior design & fit out',
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
      'Explore apartment interior design, renovation and fit-out projects in Dubai by We Do Interior. Discover our portfolio.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/apartment-projects',
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
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'we do interior design & fit out',
              url: 'https://wedointerior.ae/',
              logo: 'https://wedointerior.ae/logo.png',
              sameAs: [
                'https://www.instagram.com/we.do.uae',
                'https://www.facebook.com/wedo.design.dubai',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+971-50-123-4567',
                contactType: 'Customer Service',
                areaServed: 'AE',
                availableLanguage: ['English', 'Arabic'],
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'jebel ali Industrial',
                addressLocality: 'Dubai',
                postalCode: '00000',
                addressCountry: 'AE',
              },
            }),
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Interior Design Projects in Dubai',
              url: 'https://wedointerior.ae/projects',
              description:
                'Explore luxury interior design and fit-out projects in Dubai by We Do Interior. Discover our residential, commercial, and hospitality portfolio.',
            }),
          }}
        />

        {/* CollectionPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Interior Design Projects',
              url: 'https://wedointerior.ae/projects',
              description:
                'A curated collection of luxury interior design and fit-out projects completed by We Do Interior Design in Dubai.',
              mainEntity: {
                '@type': 'ItemList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Apartment Interior Projects',
                    url: 'https://wedointerior.ae/apartment-projects',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Villa Interior Projects',
                    url: 'https://wedointerior.ae/villa-projects',
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Penthouse Interior Projects',
                    url: 'https://wedointerior.ae/penthouse-projects',
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
