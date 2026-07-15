import './globals.css';

import {
  WEDO_BUSINESS,
  WEDO_AGGREGATE_RATING,
  WEDO_REVIEWS,
  WEDO_ORGANIZATION_ID,
} from './business-schema';

const SITE_URL = 'https://wedointerior.ae/';

const HOME_TITLE =
  'Interior Design Dubai | Luxury Designers | We Do Interior';

const HOME_DESCRIPTION =
  'Interior design Dubai & turnkey fit-out for villas, apartments & offices. 15+ years, 500+ projects. Get a free consultation today.';

/* ==========================================================================
   Metadata
   ========================================================================== */

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: HOME_TITLE,

  description: HOME_DESCRIPTION,

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: SITE_URL,
    siteName: 'WE DO Interior Design',
    type: 'website',

    images: [
      {
        url: '/images/logo.svg',
        width: 1200,
        height: 630,
        alt: 'WE DO Interior Design and Fit-Out Dubai',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ['/images/logo.svg'],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

/* ==========================================================================
   Structured Data
   ========================================================================== */

const localBusinessSchema = {
  '@context': 'https://schema.org',

  ...WEDO_BUSINESS,

  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}images/logo.svg`,
    width: 600,
    height: 60,
  },

  image: `${SITE_URL}images/logo.svg`,

  aggregateRating: WEDO_AGGREGATE_RATING,

  /*
   * Keep review markup only when these same reviews
   * are visibly displayed on the homepage.
   */
  review: WEDO_REVIEWS,

  /*
   * Add only real company profile URLs.
   *
   * sameAs: [
   *   'https://www.instagram.com/your-profile',
   *   'https://www.facebook.com/your-profile',
   *   'https://www.linkedin.com/company/your-profile',
   *   'https://www.houzz.com/pro/your-profile',
   * ],
   */
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}#website`,
  url: SITE_URL,
  name: 'WE DO Interior Design',
  publisher: {
    '@id': WEDO_ORGANIZATION_ID,
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}#webpage`,
  url: SITE_URL,
  name: HOME_TITLE,
  description: HOME_DESCRIPTION,

  isPartOf: {
    '@id': `${SITE_URL}#website`,
  },

  about: {
    '@id': WEDO_ORGANIZATION_ID,
  },

  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `${SITE_URL}images/logo.svg`,
  },
};

const siteNavigationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'WE DO Interior Design Website Navigation',

  itemListElement: [
    {
      '@type': 'SiteNavigationElement',
      position: 1,
      name: 'About Us',
      url: `${SITE_URL}about-us`,
    },
    {
      '@type': 'SiteNavigationElement',
      position: 2,
      name: 'Apartment Interior Design Dubai',
      url: `${SITE_URL}apartment-interior-design-dubai`,
    },
    {
      '@type': 'SiteNavigationElement',
      position: 3,
      name: 'Villa Interior Design Dubai',
      url: `${SITE_URL}villa-interior-design-dubai`,
    },
    {
      '@type': 'SiteNavigationElement',
      position: 4,
      name: 'Villa Renovation Dubai',
      url: `${SITE_URL}villa-renovation-dubai`,
    },
    {
      '@type': 'SiteNavigationElement',
      position: 5,
      name: 'Projects',
      url: `${SITE_URL}projects`,
    },
    {
      '@type': 'SiteNavigationElement',
      position: 6,
      name: 'Contact Us',
      url: `${SITE_URL}contact-us`,
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',

  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}#interior-design-fit-out-service`,

  name: 'Interior Design and Fit-Out Dubai',
  serviceType: 'Interior Design and Fit-Out',
  url: SITE_URL,

  provider: {
    '@id': WEDO_ORGANIZATION_ID,
  },

  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    containedInPlace: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
  },
};

/* ==========================================================================
   Root Layout
   ========================================================================== */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads and Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11361089409"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                window.dataLayer.push(arguments);
              }

              gtag('js', new Date());

              gtag('config', 'AW-11361089409');
              gtag('config', 'G-1DX7X8GKN2');
            `,
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageSchema),
          }}
        />

        {/* Site Navigation Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteNavigationSchema),
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}