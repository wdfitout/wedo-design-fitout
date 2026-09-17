// Shared WE DO Interior Design & Fit-Out business facts for JSON-LD.
// Import this into route layouts so the core business entity,
// NAP and review information remain consistent across the site.

export const SITE_URL = 'https://wedointerior.ae/';

export const WEDO_ORGANIZATION_ID = `${SITE_URL}#organization`;

export const WEDO_BUSINESS_ID = `${SITE_URL}#business`;

export const WEDO_BUSINESS = {
  '@type': 'ProfessionalService',
  '@id': WEDO_BUSINESS_ID,

  name: 'WE DO Interior Design & Fit-Out',

  url: SITE_URL,

  telephone: '+971588075603',

  email: 'info@wedointerior.ae',

  image: `${SITE_URL}og-image.jpg`,

  priceRange: '$$$',

  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dubai - X4RG+39W Jabel Ali, Jabel Ali Industrial 1 - Dubai',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE',
  },

  areaServed: [
    {
      '@type': 'Place',
      name: 'Dubai',
    },
    {
      '@type': 'Place',
      name: 'Business Bay',
    },
    {
      '@type': 'Place',
      name: 'Downtown Dubai',
    },
    {
      '@type': 'Place',
      name: 'Palm Jumeirah',
    },
    {
      '@type': 'Place',
      name: 'Dubai Creek Harbour',
    },
    {
      '@type': 'Place',
      name: 'Dubai Marina',
    },
    {
      '@type': 'Place',
      name: 'Dubai Hills Estate',
    },
    {
      '@type': 'Place',
      name: 'Jumeirah',
    },
    {
      '@type': 'Place',
      name: 'Emirates Hills',
    },
    {
      '@type': 'Place',
      name: 'DIFC',
    },
  ],
};

// Update whenever your GBP rating/review count changes.
export const WEDO_AGGREGATE_RATING = {
  '@type': 'AggregateRating',
  ratingValue: '4.9',
  reviewCount: 118,
  bestRating: '5',
};

// Shared testimonials, reused wherever review markup appears.
export const WEDO_REVIEWS = [
  {
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: 'Sarah A.',
    },
    reviewBody:
      "WE DO completely transformed our villa into a modern, elegant home while preserving the character we loved. From the renovation planning to the final finishes, every detail was handled professionally. The team kept us informed throughout the project, completed the work on schedule, and delivered exceptional quality. We couldn't be happier with the results.",
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
  },

  {
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: 'Ahmed K.',
    },
    reviewBody:
      "Renovating our villa felt like a huge decision, but WE DO made the entire process smooth and stress-free. Their designers understood exactly what we wanted, and the craftsmanship exceeded our expectations. The finished home is brighter, more functional, and beautifully finished. We highly recommend them to anyone planning a villa renovation in Dubai.",
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
  },
];