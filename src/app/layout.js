import './globals.css';

export const metadata = {
  title: 'Interior Design Dubai | Modern Interior Designs in Dubai',
  description:
    'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
  metadataBase: new URL('https://wedointerior.ae/'),
  openGraph: {
    title: 'Interior Blog | Modern Interior Design in Dubai',
    description:
      'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
    url: 'https://wedointerior.ae/',
    siteName: 'we do interior design & fit out',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Interior Blog Banner',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Blog | Modern Interior Design in Dubai',
    description:
      'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <head>
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
                'https://www.instagram.com/yourprofile',
                'https://www.facebook.com/yourprofile',
              ],
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
              name: 'we do interior design & fit out',
              url: 'https://wedointerior.ae/',
              description:
                'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
            }),
          }}
        />

        {/* BlogPosting Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: 'Modern Interior Design in Dubai',
              description:
                'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
              url: 'https://wedointerior.ae/',
              author: {
                '@type': 'Organization',
                name: 'we do interior design & fit out',
              },
              publisher: {
                '@type': 'Organization',
                name: 'we do interior design & fit out',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://wedointerior.ae/logo.png',
                },
              },
              mainEntityOfPage: 'https://wedointerior.ae/',
              image: 'https://wedointerior.ae/og-image.jpg',
              datePublished: '2025-06-22',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
