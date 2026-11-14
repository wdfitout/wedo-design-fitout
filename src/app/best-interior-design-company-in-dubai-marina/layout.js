import "../globals.css";

const siteUrl = "https://wedointerior.ae";
const pagePath = "/best-interior-design-company-in-dubai-marina";
const pageUrl = `${siteUrl}${pagePath}`;

const pageTitle = "Interior Design Company in Dubai Marina | WE DO";
const pageDescription =
  "Award-winning interior design in Dubai Marina by WE DO. ISO certified, 250+ projects, in-house designers and joinery factory. Book a free site visit today.";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: pagePath,
  },

  openGraph: {
    title: pageTitle,
    description:
      "Interior design for Dubai Marina apartments, penthouses and holiday homes, with in-house joinery, approvals handled and 3D/VR previews.",
    url: pageUrl,
    siteName: "WE DO Interior Design & Fitout",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "WE DO Interior Design & Fitout Dubai Marina",
      },
    ],
    locale: "en_AE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description:
      "Interior design for Dubai Marina apartments, penthouses and holiday homes by WE DO Interior Design & Fitout.",
    images: [`${siteUrl}/og-image.jpg`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/*
 * FAQs: must match the FAQs visible on the page (AboutSection).
 * If you edit a question or answer there, update it here too.
 */
const faqs = [
  [
    "How much does interior design cost in Dubai Marina?",
    "Design-only packages at WE DO start from around AED 15,000 for a studio apartment. Fully delivered projects, including design, joinery, finishes and furniture, typically range from AED 120,000 for a 1-bedroom apartment to AED 600,000 or more for a penthouse. The exact cost depends on size, view, materials and joinery. We give you a written cost band after a free site visit.",
  ],
  [
    "How long does an interior design project take in Dubai Marina?",
    "Concept to final drawings usually takes 3–6 weeks. A fully delivered 1- or 2-bedroom apartment typically takes 8–14 weeks including building approvals, and penthouses 16–24 weeks. Furniture-and-styling-only projects can be completed faster.",
  ],
  [
    "Do you design apartments in my tower?",
    "Yes, our interior designers work in towers across Dubai Marina, including Princess Tower, Cayan Tower, Marina Gate, DAMAC Heights, Marina 101, Emaar 6 Towers, Marina Promenade, Marina Diamonds and Le Reve.",
  ],
  [
    "Do I need building approval for interior works in Dubai Marina?",
    "In most towers, yes. The works such as joinery installation, ceiling, electrical, AC or wet-area changes usually need a building management NOC, and some scopes need Dubai Municipality or Civil Defence approval. Our in-house approvals team prepares and submits everything for you.",
  ],
  [
    "What is the difference between design-only and turnkey interior design?",
    "Design-only gives you concepts, 3D renders, drawings and a materials schedule to use with your own contractor. Turnkey means WE DO also handles approvals, joinery, works, furniture and styling, with one contract and one point of contact until handover.",
  ],
  [
    "Can I see my Dubai Marina home in 3D before work starts?",
    "Yes. Every project includes mood boards and photoreal 3D renders, and you can walk through your future home in VR. Changes are made at this stage, before any money is spent on materials.",
  ],
  [
    "Do you design holiday homes and short-let apartments in Dubai Marina?",
    "Yes. We design rental-ready interiors with durable, easy-clean finishes, smart access, generous storage and photogenic styling, and can supply a full furniture package so the unit is ready to list on handover.",
  ],
  [
    "Can WE DO also carry out the works after the design?",
    "Yes. Because our civil, decoration and joinery teams are in-house, we can deliver everything the design needs, including fit-out, flooring, ceilings, MEP, smart home systems and apartment renovation work, without handing you over to a separate contractor.",
  ],
  [
    "Can you work while I live in the apartment or while it is tenanted?",
    "Often, yes. We phase works room by room, protect lifts and corridors, and keep noisy work within the tower's permitted hours. For full-home projects, a vacant apartment is faster and usually more cost-effective.",
  ],
  [
    "Which interior design style suits a Dubai Marina apartment?",
    "Light, view-led styles work best: contemporary coastal, warm minimalist and modern luxury are the most popular. Your designer presents mood boards in more than one direction so you can choose with confidence.",
  ],
  [
    "Is interior design in Dubai Marina worth it for rental yield?",
    "Well-designed, well-photographed Marina apartments stand out in a crowded rental and short-let market and can command higher rates. We design to your target guest or tenant and to a finish that stays durable under frequent turnover.",
  ],
];

/* Service cards shown on the page (all URLs live). */
const services = [
  ["Apartment Interior Design in Dubai Marina", "/apartment-interior-design-dubai"],
  ["Office Interior Design in Dubai Marina", "/office-interior-design-dubai"],
  ["Restaurant Interior Design in Dubai Marina", "/restaurant-interior-design"],
  ["Cafe Interior Design in Dubai Marina", "/cafe-interior-design-dubai"],
];

/* Project cards shown on the page (all URLs live). */
const projects = [
  ["Dubai Marina Apartment", "/dubai-marina-apartment"],
  ["Dubai Marina Luxury Apartment", "/dubai-marina-luxury-apartment"],
  ["Marina Vista Apartment, Emaar Beachfront", "/emaar-beach-front-marina-vista-apartment"],
  ["Marina Gate Luxury Apartment", "/marina-gate-2-luxury-apartment"],
];

export default function DubaiMarinaLayout({ children }) {
  /*
   * WebPage for this Dubai Marina landing page.
   * Organization (#organization), ProfessionalService (#business) and
   * WebSite (#website) are already output site-wide, so they are only
   * referenced here by @id, not redefined.
   */
  const webPageSchema = {
    "@type": "WebPage",
    "@id": `${pageUrl}/#webpage`,
    url: pageUrl,
    name: "Interior Design Company in Dubai Marina",
    description: pageDescription,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${pageUrl}/#service` },
    publisher: { "@id": `${siteUrl}/#organization` },
    breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}/og-image.jpg`,
    },
    inLanguage: "en-AE",
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Areas We Serve",
        item: `${siteUrl}/interior-design-dubai`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dubai Marina",
        item: pageUrl,
      },
    ],
  };

  /*
   * Dubai Marina is an area served, not the business address.
   */
  const serviceSchema = {
    "@type": "Service",
    "@id": `${pageUrl}/#service`,
    name: "Interior Design in Dubai Marina",
    serviceType: "Interior Design",
    url: pageUrl,
    description:
      "Interior design and turnkey fit-out for Dubai Marina apartments, penthouses, holiday homes, offices, restaurants and cafes, with in-house joinery and building approvals handled.",
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: {
      "@type": "Place",
      name: "Dubai Marina",
      containedInPlace: {
        "@type": "City",
        name: "Dubai",
        containedInPlace: {
          "@type": "Country",
          name: "United Arab Emirates",
        },
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Interior Design Services in Dubai Marina",
      itemListElement: services.map(([name, path]) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          url: `${siteUrl}${path}`,
          areaServed: { "@type": "Place", name: "Dubai Marina" },
        },
      })),
    },
  };

  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${pageUrl}/#faq`,
    isPartOf: { "@id": `${pageUrl}/#webpage` },
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  const projectsSchema = {
    "@type": "ItemList",
    "@id": `${pageUrl}/#projects`,
    name: "Dubai Marina Interior Design Projects",
    itemListElement: projects.map(([name, path], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      url: `${siteUrl}${path}`,
    })),
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      webPageSchema,
      breadcrumbSchema,
      serviceSchema,
      faqSchema,
      projectsSchema,
    ],
  };

  /*
   * Nested layout: no <html>, <head> or <body> here. The root layout
   * already renders those, and repeating them produced a second <html>
   * and a duplicate viewport tag. Next.js adds the viewport tag itself.
   */
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      {children}
    </>
  );
}
