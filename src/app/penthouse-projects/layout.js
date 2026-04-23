import '../globals.css';

export const metadata = {
  title: "Penthouse Projects In Dubai - We Do Interior Design & Fit-Out",
  description:
    "Penthouse projects in Dubai by WE DO. We specialize in luxury penthouse interior design and penthouse renovation services. Browse our projects.",
  keywords: [
  'Penthouse Projects Dubai',
  'Penthouse Interior Design Dubai',
  'Penthouse Interior Dubai',
  'Penthouse Renovation Dubai',
  'Penthouse Fit-Out Dubai',
  'Luxury Penthouse Interior Design UAE',
  'Penthouse Interior Design Company Dubai',
  'Penthouse Interior Design Services Dubai',
  'High-End Penthouse Design Dubai',
  'We Do Penthouse Interior Projects'
],

publisher: [
  'WEDO Interior Design & Fit-Out'],


  metadataBase: new URL('https://wedointerior.ae/'),
  openGraph: {
    title: 'Penthouse Projects Dubai - We Do Interior',
    description:
      'Penthouse projects in Dubai by WE DO. We specialize in luxury penthouse interior design and penthouse renovation services. Browse our projects.',
    url: 'https://wedointerior.ae/penthouse-projects/',
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
      'Penthouse projects in Dubai by WE DO. We specialize in luxury penthouse interior design and penthouse renovation services. Browse our projects.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/penthouse-projects',
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
                streetAddress: 'Jabel Ali Industrial 1',
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


      </head>
      <body>{children}</body>
    </html>
  );
}
