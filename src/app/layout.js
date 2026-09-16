import './globals.css';

import {
  WEDO_BUSINESS,
  WEDO_BUSINESS_ID,
  WEDO_AGGREGATE_RATING,
  WEDO_REVIEWS,
  WEDO_ORGANIZATION_ID,
} from './business-schema';

const SITE_URL = 'https://wedointerior.ae/';
const HOME_URL = SITE_URL;

const HOME_TITLE =
  'Interior Design Dubai | Luxury Designers | WE DO Interior';

const HOME_DESCRIPTION =
  'Luxury interior design and turnkey fit-out in Dubai for villas, apartments and offices. 15+ years of experience and 250+ residential and commercial projects.';

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

    url: HOME_URL,

    siteName: 'WE DO Interior Design & Fitout',

    type: 'website',

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WE DO Interior Design & Fitout Dubai',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: HOME_TITLE,

    description: HOME_DESCRIPTION,

    images: ['/og-image.jpg'],
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

  icons: {
    icon: '/favicon.ico',
  },
};

/* ==========================================================================
   Organization Schema
   ========================================================================== */

const organizationSchema = {
  '@type': 'Organization',

  '@id': WEDO_ORGANIZATION_ID,

  name: 'WE DO Interior Design & Fitout',

  url: SITE_URL,

  logo: {
    '@type': 'ImageObject',
    '@id': `${SITE_URL}#logo`,
    url: `${SITE_URL}logo-s-Black.png`,
    contentUrl: `${SITE_URL}logo-s-Black.png`,
  },

  sameAs: [
    'https://www.instagram.com/we.do.uae',
    'https://www.facebook.com/wedointerior',
  ],

  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971 58 807 5603',
    contactType: 'customer service',
    areaServed: 'AE',
    availableLanguage: ['English', 'Arabic'],
  },

  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dubai - X4RG+39W Jabel Ali, Jabel Ali Industrial 1 - Dubai',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE',
  },
};

/* ==========================================================================
   Business Schema
   ========================================================================== */

const businessSchema = {
  ...WEDO_BUSINESS,

  parentOrganization: {
    '@id': WEDO_ORGANIZATION_ID,
  },

  logo: {
    '@type': 'ImageObject',
    '@id': `${SITE_URL}#logo`,
    url: `${SITE_URL}logo-s-Black.png`,
    contentUrl: `${SITE_URL}logo-s-Black.png`,
  },

  image: `${SITE_URL}og-image.jpg`,

  aggregateRating: WEDO_AGGREGATE_RATING,

  /*
   * Keep review markup only when these same reviews
   * are visibly displayed on the homepage.
   */
  review: WEDO_REVIEWS,
};

/* ==========================================================================
   WebSite Schema
   ========================================================================== */

const websiteSchema = {
  '@type': 'WebSite',

  '@id': `${SITE_URL}#website`,

  url: SITE_URL,

  name: 'WE DO Interior Design & Fitout',

  publisher: {
    '@id': WEDO_ORGANIZATION_ID,
  },

  inLanguage: 'en-AE',
};

/* ==========================================================================
   WebPage Schema
   ========================================================================== */

const webPageSchema = {
  '@type': 'WebPage',

  '@id': `${HOME_URL}#webpage`,

  url: HOME_URL,

  name: HOME_TITLE,

  description: HOME_DESCRIPTION,

  isPartOf: {
    '@id': `${SITE_URL}#website`,
  },

  about: {
    '@id': WEDO_BUSINESS_ID,
  },

  publisher: {
    '@id': WEDO_ORGANIZATION_ID,
  },

  breadcrumb: {
    '@id': `${HOME_URL}#breadcrumb`,
  },

  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `${SITE_URL}og-image.jpg`,
  },

  inLanguage: 'en-AE',

  mainEntity: {
    '@id': `${HOME_URL}#service`,
  },
};

/* ==========================================================================
   Site Navigation Schema
   ========================================================================== */

const siteNavigationSchema = {
  '@type': 'ItemList',

  '@id': `${HOME_URL}#navigation`,

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

/* ==========================================================================
   Breadcrumb Schema
   ========================================================================== */

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',

  '@id': `${HOME_URL}#breadcrumb`,

  itemListElement: [
    {
      '@type': 'ListItem',

      position: 1,

      name: 'Home',

      item: HOME_URL,
    },
  ],
};

/* ==========================================================================
   Homepage Service Schema
   ========================================================================== */

const serviceSchema = {
  '@type': 'Service',

  '@id': `${HOME_URL}#service`,

  name: 'Interior Design and Fit-Out Dubai',

  serviceType: 'Interior Design and Fit-Out',

  url: HOME_URL,

  provider: {
    '@id': WEDO_BUSINESS_ID,
  },

  areaServed: {
    '@type': 'City',

    name: 'Dubai',

    containedInPlace: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
  },

  description:
    'Luxury residential and commercial interior design and turnkey fit-out services in Dubai for villas, apartments, offices, restaurants and other interior spaces.',
};

/* ==========================================================================
   Combined Structured Data
   ========================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',

  '@graph': [
    organizationSchema,
    businessSchema,
    websiteSchema,
    webPageSchema,
    siteNavigationSchema,
    breadcrumbSchema,
    serviceSchema,
  ],
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
      </head>

      <body>
        {children}

        {/* Combined JSON-LD */}

        <script
          id="wedo-root-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}