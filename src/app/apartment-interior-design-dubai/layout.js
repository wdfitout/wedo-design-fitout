import '../globals.css';

const SITE_URL = 'https://wedointerior.ae';
const PAGE_PATH = '/apartment-interior-design-dubai';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const HERO_IMAGE = `${SITE_URL}/images/dubai-interior-design-companies-apartment-sitting-area.webp`;

export const metadata = {
  title: 'Apartment Interior Design Dubai | WE DO Interior Design & Fit-Out',
  description:
    'Luxury apartment interior design and fit-out in Dubai by WE DO. Bespoke interiors, custom joinery, renovation and turnkey execution for premium residences.',
  metadataBase: new URL(`${SITE_URL}/`),

  alternates: {
    canonical: PAGE_PATH,
  },

  openGraph: {
    title: 'Apartment Interior Design Dubai | WE DO',
    description:
      'Luxury apartment interior design and fit-out in Dubai by WE DO. Bespoke interiors, custom joinery, renovation and turnkey execution for premium residences.',
    url: PAGE_PATH,
    siteName: 'WE DO Interior Design & Fit-Out',
    type: 'website',
    locale: 'en_AE',
    images: [
      {
        url: '/images/dubai-interior-design-companies-apartment-sitting-area.webp',
        width: 1200,
        height: 630,
        alt: 'Luxury apartment interior design in Dubai by WE DO',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Apartment Interior Design Dubai | WE DO',
    description:
      'Luxury apartment interior design and fit-out in Dubai by WE DO. Bespoke interiors, custom joinery, renovation and turnkey execution for premium residences.',
    images: ['/images/dubai-interior-design-companies-apartment-sitting-area.webp'],
  },
};

/* ------------------------------------------------------------------ */
/* FAQs — text must stay word-for-word identical to the visible FAQ    */
/* section on the page. If you edit one, edit the other.               */
/* ------------------------------------------------------------------ */
const faqs = [
  {
    q: 'How much does apartment interior design cost in Dubai?',
    a: 'Apartment interior design and fit-out in Dubai typically costs around AED 80–150 per sq ft, from about AED 40,000 for a studio to AED 300,000+ for a 3-bedroom or larger apartment, with penthouses quoted on scope. The price depends on size, scope (design-only or turnkey), materials, custom joinery and approvals. WE DO provides a detailed quotation after an on-site meeting, with mood boards and 3D visualisation.',
  },
  {
    q: 'How long does an apartment interior design and fit-out take in Dubai?',
    a: 'A turnkey apartment fit-out in Dubai typically takes 3–5 weeks for a studio, 6–9 weeks for a 1-bedroom, 8–12 weeks for a 2-bedroom and 10–16 weeks for a 3-bedroom or larger apartment, with design and building approvals adding time before work starts. Penthouses with bespoke joinery or imported materials can take longer. Our in-house joinery factory keeps production on schedule.',
  },
  {
    q: 'Do I need approvals to renovate or fit out my apartment in Dubai?',
    a: 'Yes, most apartment fit-outs in Dubai need approval before work starts. This usually means a building NOC from building management and, depending on the scope, developer approval (such as Emaar or Damac) and authority approvals from Dubai Municipality or Dubai Civil Defence. WE DO’s dedicated approvals team prepares and submits these for you.',
  },
  {
    q: 'Should I hire one company for both design and fit-out?',
    a: 'For most apartments, yes. One company handling both design and fit-out gives you a single point of responsibility, a design that is costed and buildable from day one, and no handovers between contractors. WE DO delivers both under one roof, with in-house designers, civil works and decoration teams, and its own joinery factory.',
  },
  {
    q: 'What types of apartments do you design?',
    a: 'WE DO designs and fits out studios, 1–3 bedroom apartments and penthouses across Dubai. Recent apartment projects include Atlantis The Royal, Marina Gate 2, Acacia Dubai Hills, Emaar Beachfront Marina Vista and a Palm Jumeirah penthouse, ranging from compact city apartments to fully bespoke luxury residences.',
  },
  {
    q: 'Which Dubai buildings and communities have you worked in?',
    a: 'WE DO has completed apartment interiors at Atlantis The Royal, Marina Gate 2, Emaar Beachfront Marina Vista, Acacia Dubai Hills, Madinat Jumeirah Living, Palm Jumeirah and Business Bay. Our Primo Tower apartment by Emaar won the Luxury Lifestyle Awards 2026 for Best Luxury Residential Renovation Interior Design. We work across Downtown Dubai, Business Bay, Dubai Marina, Palm Jumeirah, Dubai Hills Estate and DIFC.',
  },
  {
    q: 'What’s included in a turnkey apartment package, and can it be move-in ready?',
    a: 'A turnkey package covers everything from concept to handover: space planning, mood boards, 3D visualisation and VR/AR walkthroughs, building approvals, civil and decoration works, custom joinery from our own factory, furniture and décor sourcing, on-site supervision and final styling. Yes, the apartment is handed over furnished and ready to move into.',
  },
  {
    q: 'Can I stay in my apartment during the works?',
    a: 'It depends on the scope. For lighter works such as furnishing, styling or joinery installation, you can usually stay in the apartment while working. For full fit-outs involving flooring, kitchens, bathrooms, or MEP works, we recommend that our clients move out, as dust, noise, and building working-hour rules make living there impractical.',
  },
  {
    q: 'Can you renovate an apartment that’s rented out or between tenants?',
    a: 'Yes. Most of our clients in Dubai are investors, and they are upgrading apartments to increase rental value. The best time is between tenancies, when works can run without disruption. If the apartment is occupied, we coordinate access with the tenant and building management, and schedule works to keep disruption to a minimum.',
  },
];

/* Apartment projects linked from this page */
const projects = [
  { name: 'Atlantis The Royal 2-Bedroom Apartment', path: '/royal-atlantis-2-bedroom-apartment' },
  { name: 'Palm Jumeirah 2-Bedroom Penthouse', path: '/palm-jumeirah-2-bedroom-penthouse' },
  { name: 'Business Bay Apartment', path: '/business-bay-apartment' },
  { name: 'Acacia Dubai Hills 2-Bedroom Apartment', path: '/acacia-dubai-hills-2-bedroom-apartment' },
  { name: 'Dubai Marina Luxury Apartment', path: '/dubai-marina-luxury-apartment' },
  { name: 'Emaar Beachfront Marina Vista Apartment', path: '/emaar-beach-front-marina-vista-apartment' },
  { name: 'Marina Gate 2 Luxury Apartment', path: '/marina-gate-2-luxury-apartment' },
  { name: 'Palm Jumeirah Apartment', path: '/palm-jumeirah-apartment' },
  { name: 'Madinat Jumeirah Living Asayel Apartment', path: '/madinat-jumeirah-living-asayel-apartment' },
];

const areasServed = [
  'Downtown Dubai',
  'Business Bay',
  'Dubai Marina',
  'Palm Jumeirah',
  'Dubai Hills Estate',
  'DIFC',
  'Jumeirah Village Circle',
];

/* ------------------------------------------------------------------ */
/* Page schema. Organization (#organization), ProfessionalService      */
/* (#business) and WebSite (#website) are already output by the root   */
/* layout, so they are referenced by @id here, not redefined.          */
/* ------------------------------------------------------------------ */
const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Apartment Interior Design Dubai | WE DO Interior Design & Fit-Out',
      description:
        'Luxury apartment interior design and fit-out in Dubai by WE DO. Bespoke interiors, custom joinery, renovation and turnkey execution for premium residences.',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${PAGE_URL}#service` },
      mainEntity: { '@id': `${PAGE_URL}#service` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      primaryImageOfPage: { '@id': `${PAGE_URL}#primaryimage` },
      image: { '@id': `${PAGE_URL}#primaryimage` },
      hasPart: [{ '@id': `${PAGE_URL}#faq` }, { '@id': `${PAGE_URL}#projects` }],
    },
    {
      '@type': 'ImageObject',
      '@id': `${PAGE_URL}#primaryimage`,
      url: HERO_IMAGE,
      contentUrl: HERO_IMAGE,
      width: 1920,
      height: 1080,
      caption: 'Apartment living room interior design sitting area, Dubai',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Residential', item: `${SITE_URL}/home-interior-design-dubai` },
        { '@type': 'ListItem', position: 3, name: 'Apartment Interior Design Dubai', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Apartment Interior Design and Fit-Out in Dubai',
      alternateName: ['Apartment Interior Design Dubai', 'Turnkey Apartment Fit-Out Dubai'],
      serviceType: 'Apartment Interior Design and Fit-Out',
      url: PAGE_URL,
      description:
        'Turnkey apartment interior design and fit-out in Dubai for studios, 1–3 bedroom apartments and penthouses: space planning, mood boards, 3D visualisation and VR/AR walkthroughs, building NOCs and authority approvals, civil and decoration works, custom joinery from an in-house factory, furniture sourcing, on-site supervision and final styling.',
      image: { '@id': `${PAGE_URL}#primaryimage` },
      provider: { '@id': `${SITE_URL}/#business` },
      brand: { '@id': `${SITE_URL}/#organization` },
      areaServed: [
        ...areasServed.map((name) => ({ '@type': 'Place', name: `${name}, Dubai` })),
        {
          '@type': 'City',
          name: 'Dubai',
          containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' },
        },
      ],
      audience: {
        '@type': 'Audience',
        audienceType: 'Apartment owners, property investors and landlords in Dubai',
      },
      offers: {
        '@type': 'Offer',
        url: PAGE_URL,
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          priceCurrency: 'AED',
          minPrice: 80,
          maxPrice: 150,
          unitText: 'per sq ft',
        },
        seller: { '@id': `${SITE_URL}/#business` },
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Apartment Interior Design Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Studio Apartment Interior Design & Fit-Out' },
            priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'AED', minPrice: 40000 },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: '1–3 Bedroom Apartment Interior Design & Fit-Out' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Penthouse Interior Design & Fit-Out' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Custom Joinery & Built-In Wardrobes' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Building NOC & Authority Approvals' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Furniture Sourcing & Styling' },
          },
        ],
      },
      subjectOf: { '@id': `${PAGE_URL}#faq` },
    },
    {
      '@type': 'ItemList',
      '@id': `${PAGE_URL}#projects`,
      name: 'Completed Apartment Interior Design Projects in Dubai',
      numberOfItems: projects.length,
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: `${SITE_URL}${p.path}`,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      url: PAGE_URL,
      isPartOf: { '@id': `${PAGE_URL}#webpage` },
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

export default function ApartmentInteriorDesignLayout({ children }) {
  return (
    <>
      <script
        id="apartment-interior-design-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  );
}