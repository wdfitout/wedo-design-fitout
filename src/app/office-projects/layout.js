import '../globals.css';

export const metadata = {
  title: "Office Projects in Dubai - WEDO Interior",
  description:
    "Corporate Office, interior design and fit-out projects in Dubai by We Do Interior. Discover our commercial portfolio.",
  keywords: [
  'Office Projects Dubai',
  'Office Interior Design Dubai',
  'Office Fit-Out Company Dubai',
  'Corporate Interiors Dubai',
  'Corporate Office Interior Design Dubai',
  'Office Interior Design Companies in Dubai',
  'Commercial Office Design UAE',
  'Modern Office Interiors Dubai',
  'Workplace Fit-Out Dubai',
  'We Do Office Interior Projects'
],
publisher: ['WEDO Interior Design and Fit-out'],
  metadataBase: new URL('https://wedointerior.ae/'),
  openGraph: {
    title: 'Office Projects in Dubai - Corporate Interiors By WEDO',
    description:
      'Corporate Office, interior design and fit-out projects in Dubai by We Do Interior. Discover our commercial portfolio.',
    url: 'https://wedointerior.ae/office-projects/',
    siteName: 'we do interior design & fit out',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Office Interior Design Project Banner',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Projects in Dubai - Corporate Interiors By WEDO',
    description:
      'Corporate Office, interior design and fit-out projects in Dubai by We Do Interior. Discover our commercial portfolio.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/office-projects',
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
                streetAddress: 'Jabel Ali Industrial',
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
              url: 'https://wedointerior.ae/office-projects',
              description:
                'Corporate Office, interior design and fit-out projects in Dubai by We Do Interior. Discover our commercial portfolio.',
            }),
          }}
        />

       
      </head>
      <body>{children}</body>
    </html>
  );
}
