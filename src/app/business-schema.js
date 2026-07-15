// Shared WE DO Interior Design & Fit-Out business facts for JSON-LD.
// Import this into every route's layout.js so NAP, the aggregate rating,
// and the entity @id stay identical across the whole site.
//
// When your Google review count or rating changes, update WEDO_AGGREGATE_RATING
// here once — every page that imports it picks up the new number on next build.
//
// NOTE ON @id: Google does NOT merge structured data across separate pages,
// even when they share the same @id. Reusing this @id everywhere keeps the
// entity consistently identified for Google's/AI systems' benefit, but each
// page still needs its own complete required properties to be independently
// eligible for rich results — the @id alone does not import this file's data
// into another page for Google. That's why this file's values get spread
// directly into each page's own JSON-LD below, not just referenced by @id.

export const SITE_URL = 'https://wedointerior.ae/';

export const WEDO_ORGANIZATION_ID = `${SITE_URL}#organization`;

export const WEDO_BUSINESS = {
  '@type': 'LocalBusiness',
  '@id': WEDO_ORGANIZATION_ID,
  name: 'WE DO Interior Design & Fit-Out',
  url: SITE_URL,
  telephone: '+971 58 807 5603',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'WH-05 A, Jebel Ali Industrial 1',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
};

// Update whenever your GBP rating/review count changes.
export const WEDO_AGGREGATE_RATING = {
  '@type': 'AggregateRating',
  ratingValue: '4.9',
  reviewCount: 118,
  bestRating: '5',
};

// Shared testimonials, reused wherever review markup appears on the site.
export const WEDO_REVIEWS = [
  {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Sarah A.' },
    reviewBody:
      "WE DO completely transformed our villa into a modern, elegant home while preserving the character we loved. From the renovation planning to the final finishes, every detail was handled professionally. The team kept us informed throughout the project, completed the work on schedule, and delivered exceptional quality. We couldn't be happier with the results.",
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  },
  {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Ahmed K.' },
    reviewBody:
      "Renovating our villa felt like a huge decision, but WE DO made the entire process smooth and stress-free. Their designers understood exactly what we wanted, and the craftsmanship exceeded our expectations. The finished home is brighter, more functional, and beautifully finished. We highly recommend them to anyone planning a villa renovation in Dubai.",
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  },
];