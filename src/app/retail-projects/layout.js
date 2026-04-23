import '../globals.css';

export const metadata = {
  title: "Retail Projects In Dubai - We Do Interior",
  description:
    "Explore retail projects in Dubai by WE DO Interior Design & Fitout. Luxury retail interior design, boutique design & fit-out services. Contact us today.",
  keywords: [
  'Retail Projects Dubai',
  'Retail Interior Design Dubai',
  'Luxury Retail Interior Design Dubai',
  'Boutique Interior Design Dubai',
  'Retail Fit-Out Company Dubai',
  'Retail Interior Design Company Dubai',
  'Interior Design & Fit-Out Company Dubai',
  'Commercial Retail Design UAE',
  'Shop Interior Design Dubai',
  'We Do Retail Interior Projects'
],

publisher:['WEDO Interior Design & Fit-out'],
  metadataBase: new URL('https://wedointerior.ae/'),
  openGraph: {
    title: 'Retail Projects in Dubai | Luxury Boutique & Retail Interior Design',
    description:
      'Explore retail projects in Dubai by WE DO Interior Design & Fitout. Luxury retail interior design, boutique design & fit-out services. Contact us today.',
    url: 'https://wedointerior.ae/retail-projects',
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
    title: 'Retail Projects in Dubai - Luxury Boutique & Retail Interior Design',
    description:
      'Explore retail projects in Dubai by WE DO Interior Design & Fitout. Luxury retail interior design, boutique design & fit-out services. Contact us today.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/retail-projects',
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
              url: 'https://wedointerior.ae/retail-projects',
              description:
                'Explore retail projects in Dubai by WE DO Interior Design & Fitout. Luxury retail interior design, boutique design & fit-out services. Contact us today.',
            }),
          }}
        />

     
      </head>
      <body>{children}</body>
    </html>
  );
}
