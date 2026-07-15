import './globals.css';
import {
  SITE_URL,
  WEDO_ORGANIZATION_ID,
  WEDO_BUSINESS,
  WEDO_AGGREGATE_RATING,
  WEDO_REVIEWS,
} from './business-schema';

const HOME_TITLE =
  'Interior Design Dubai | Luxury Designers | We Do Interior';

const HOME_DESCRIPTION =
  'Interior design Dubai & turnkey fit-out for villas, apartments & offices. 15+ years, 500+ projects. Get a free consultation today.';

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
        alt: 'WE DO Interior Design Dubai',
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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...WEDO_BUSINESS,

  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}images/logo.svg`,
    width: 600,
    height: 60,
  },

  aggregateRating: WEDO_AGGREGATE_RATING,
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}#webpage`,
  name: 'WE DO Interior Design',
  url: SITE_URL,
  description: HOME_DESCRIPTION,

  about: {
    '@id': WEDO_ORGANIZATION_ID,
  },

  isPartOf: {
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    name: 'WE DO Interior Design',
    url: SITE_URL,
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
      name: 'Gallery',
      url: `${SITE_URL}projects`,
    },
    {
      '@type': 'SiteNavigationElement',
      position: 5,
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
  '@id': `${SITE_URL}#interior-design-service`,

  name: 'Interior Design and Fit-Out Dubai',
  serviceType: 'Interior Design and Fit-Out',
  url: SITE_URL,

  provider: {
    '@type': 'LocalBusiness',
    '@id': WEDO_ORGANIZATION_ID,
    name: WEDO_BUSINESS.name,
    url: WEDO_BUSINESS.url,
    telephone: WEDO_BUSINESS.telephone,
    address: WEDO_BUSINESS.address,
  },

  areaServed: {
    '@type': 'Place',
    name: 'Dubai, United Arab Emirates',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

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

        {/* LocalBusiness / Organization Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {/* Homepage WebPage Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageSchema),
          }}
        />

        {/*
         * BlogPosting schema is intentionally excluded because this is
         * the business homepage, not a blog article.
         */}

        {/* Website Navigation Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteNavigationSchema),
          }}
        />

        {/* Homepage Breadcrumb Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        {/* Interior Design and Fit-Out Service Schema */}

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