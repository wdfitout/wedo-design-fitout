const PAGE_URL = 'https://wedointerior.ae/villa-interior-design-dubai';

const OG_IMAGE =
  'https://wedointerior.ae/images/arabic-majlis-villa-interior-design-emirates-hills.webp';

export const metadata = {
  title: 'Luxury Villa Interior Design in Dubai | WE DO Interior',

  description:
    'Villa interior design in Dubai by WE DO, from concept to handover. 11 years, 250+ projects, ISO certified and in-house design, joinery and fit-out teams.',

  metadataBase: new URL('https://wedointerior.ae/'),

  alternates: {
    canonical: '/villa-interior-design-dubai',
  },

  openGraph: {
    title: 'Luxury Villa Interior Design in Dubai | WE DO Interior',

    description:
      'Villa interior design in Dubai by WE DO, from concept to handover. 11 years, 250+ projects, ISO certified and in-house design, joinery and fit-out teams.',

    url: PAGE_URL,

    siteName: 'WE DO Interior Design & Fit-Out',

    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Arabic-style majlis in an Emirates Hills villa interior designed by WE DO',
      },
    ],

    locale: 'en_AE',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Luxury Villa Interior Design in Dubai | WE DO Interior',

    description:
      'Villa interior design in Dubai by WE DO, from concept to handover. 11 years, 250+ projects, ISO certified and in-house design, joinery and fit-out teams.',

    images: [OG_IMAGE],
  },
};

/* -------------------------------------------------------------------------- */
/* Breadcrumb Schema                                                          */
/* -------------------------------------------------------------------------- */

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',

  '@id': `${PAGE_URL}#breadcrumb`,

  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://wedointerior.ae/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Residential Interior Design Dubai',
      item: 'https://wedointerior.ae/home-interior-design-dubai',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Villa Interior Design Dubai',
      item: PAGE_URL,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Service Schema                                                             */
/* -------------------------------------------------------------------------- */

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  '@id': `${PAGE_URL}#service`,

  name: 'Villa Interior Design in Dubai',

  serviceType: 'Villa Interior Design and Fit-Out',

  url: PAGE_URL,

  description:
    'Villa interior design and fit-out in Dubai from concept to handover, including space planning, interior styling, custom joinery, furniture, MEP coordination and project execution through in-house teams.',

  provider: {
    '@id': 'https://wedointerior.ae/#business',
  },

  areaServed: [
    {
      '@type': 'City',
      name: 'Dubai',
    },
    {
      '@type': 'Place',
      name: 'Emirates Hills, Dubai',
    },
    {
      '@type': 'Place',
      name: 'MBR City / District One, Dubai',
    },
    {
      '@type': 'Place',
      name: 'Majan, Dubai',
    },
    {
      '@type': 'Place',
      name: 'Al Manara, Dubai',
    },
    {
      '@type': 'Place',
      name: 'Dubai Hills Estate, Dubai',
    },
    {
      '@type': 'Place',
      name: 'Arabian Ranches, Dubai',
    },
    {
      '@type': 'Place',
      name: 'Palm Jumeirah, Dubai',
    },
    {
      '@type': 'Place',
      name: 'Jumeirah, Dubai',
    },
    {
      '@type': 'Place',
      name: 'Al Barsha, Dubai',
    },
  ],

  hasOfferCatalog: {
    '@type': 'OfferCatalog',

    name: 'Villa Interior Design Services',

    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Villa Interior Design',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Villa Interior Fit-Out',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Joinery and Furniture',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Space Planning and Interior Styling',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Smart Home Integration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Outdoor Terrace and Pool Design',
        },
      },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/* HowTo Schema                                                               */
/* -------------------------------------------------------------------------- */

const processSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',

  name: 'Villa Interior Design Process by WE DO',

  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Consultation and Site Visit',
      text:
        "A consultation covering style preferences, functionality needs and project requirements, followed by a site visit once you confirm you'd like to move forward.",
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Design Proposal',
      text:
        'Detailed design concepts including mood boards, 3D visuals, material selections and design development based on the villa and project requirements.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Execution and Handover',
      text:
        'In-house construction, joinery and fit-out teams manage the project through execution, finishing and final handover.',
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* WebPage Schema                                                             */
/* -------------------------------------------------------------------------- */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',

  '@id': `${PAGE_URL}#webpage`,

  url: PAGE_URL,

  name: 'Luxury Villa Interior Design in Dubai | WE DO Interior',

  inLanguage: 'en-AE',

  dateModified: '2026-09-24',

  isPartOf: {
    '@id': 'https://wedointerior.ae/#website',
  },

  breadcrumb: {
    '@id': `${PAGE_URL}#breadcrumb`,
  },

  mainEntity: {
    '@id': `${PAGE_URL}#service`,
  },

  about: {
    '@id': `${PAGE_URL}#service`,
  },

  publisher: {
    '@id': 'https://wedointerior.ae/#business',
  },

  primaryImageOfPage: {
    '@type': 'ImageObject',

    url: OG_IMAGE,

    width: 1200,

    height: 630,

    caption:
      'Luxury villa interior design in Dubai by WE DO Interior Design & Fit-Out',
  },
};

/* -------------------------------------------------------------------------- */
/* Page Layout                                                                */
/* -------------------------------------------------------------------------- */

export default function VillaInteriorDesignLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(processSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      {children}
    </>
  );
}