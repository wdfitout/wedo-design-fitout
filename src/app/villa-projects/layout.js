import '../globals.css';

export const metadata = {
  title: " Villa Interior Design Projects In Dubai - WEDO Interior",
  description:
"  Explore villa interior design projects in Dubai by WE DO Interior. We provide villa construction, villa interior design, and villa renovation services",
  keywords: [
  'Villa Interior Design Dubai',
  'Villa Construction in Dubai',
  'Villa Renovation in Dubai',
  'Luxury Villa Interior Projects UAE',
  'Villa interior Design Company in dubai',
  'villa design and build services in dubai',
  'We Do Villa Interior Projects',
  'Dubai Villa Interior Portfolio',
],
publisher: ['WEDO Interior Design and Fit out'],

  metadataBase: new URL('https://wedointerior.ae/'),
  openGraph: {
    title: 'Interior Design Projects Dubai | We Do Interior Design & Fit-Out',
    description:
      'Explore luxury interior design and fit-out projects in Dubai by We Do Interior. Discover our residential, commercial, and hospitality portfolio.',
    url: 'https://wedointerior.ae/villa-projects/',
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
      'Explore luxury interior design and fit-out projects in Dubai by We Do Interior. Discover our residential, commercial, and hospitality portfolio.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/villa-projects',
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
                streetAddress: 'Jebel Ali Industrial 1',
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
              name: 'Villa Interior Design Projects in Dubai',
              url: 'https://wedointerior.ae/villa-projects',
              description:
                'Explore luxury Villa interior design and fit-out projects in Dubai by We Do Interior. Discover our residential portfolio.',
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
                'A curated collection of luxury Residential interior design and fit-out projects completed by We Do Interior Design in Dubai.',
              mainEntity: {
                '@type': 'ItemList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Villa Interior Projects',
                    url: 'https://wedointerior.ae/villa-projects',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Apartment Interior Projects',
                    url: 'https://wedointerior.ae/apartment-projects',
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
