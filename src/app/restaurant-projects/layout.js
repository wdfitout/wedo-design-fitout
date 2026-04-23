import '../globals.css';

export const metadata = {
  title: "Cafe & Restaurant Projects in Dubai - We Do Interior ",
  description:
    "Cafe & Restaurant projects in Dubai by WE DO. We offer restaurant interior design, fit-out, & renovation services. Browse our portfolio!",
  keywords: [
  'Restaurant Projects Dubai',
  'Restaurant Interior Design Dubai',
  'Restaurant Fit-Out Dubai',
  'Cafe Interior Design Dubai',
  'Restaurants & Café Interior Designers in Dubai',
  'Restaurant Design Companies Dubai',
  'Restaurant Fit Out Companies Dubai',
  'Modern Restaurant Interiors UAE',
  'Hospitality Interior Design Dubai',
  'We Do Restaurant Interior Projects'
],
publisher: [
  'WEDO interior design & fit out'],

  metadataBase: new URL('https://wedointerior.ae/'),
  openGraph: {
    title: 'Cafe & Restaurant Projects in Dubai - We Do Interior',
    description:
      'Cafe & Restaurant projects in Dubai by WE DO. We offer restaurant interior design, fit-out, & renovation services. Browse our portfolio.',
    url: 'https://wedointerior.ae/restaurant-projects/',
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
    title: 'Cafe & Restaurant Projects in Dubai - We Do Interior',
    description:
      'Cafe & Restaurant projects in Dubai by WE DO. We offer restaurant interior design, fit-out, & renovation services. Browse our portfolio!',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/restaurant-projects',
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
              name: 'Restaurant Interior Design Projects in Dubai',
              url: 'https://wedointerior.ae/restaurant-projects',
              description:
                'Cafe & Restaurant projects in Dubai by WE DO. We offer restaurant interior design, fit-out, & renovation services. Browse our portfolio!',
            }),
          }}
        />


      </head>
      <body>{children}</body>
    </html>
  );
}
