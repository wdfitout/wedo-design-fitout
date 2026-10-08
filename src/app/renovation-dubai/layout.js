import "../globals.css";

const siteUrl = "https://wedointerior.ae";
const pagePath = "/renovation-dubai";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Renovation Company Dubai | Villa, Apartment & Office | WE DO",

  description:
    "Renovation company in Dubai for villas, apartments & offices: MEP, kitchens, bathrooms, approvals handled. 250+ projects, 11+ years. Free site visit.",

  alternates: {
    canonical: pagePath,
  },

  openGraph: {
    title: "Renovation Company Dubai | Villa, Apartment & Office | WE DO",
    description:
      "Renovation company in Dubai for villas, apartments and offices, covering MEP, kitchens, bathrooms, approvals and full interior renovations.",
    url: pageUrl,
    siteName: "WE DO Interior Design & Fit-Out",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "WE DO Renovation Company Dubai",
      },
    ],
    locale: "en_AE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Renovation Company Dubai | Villa, Apartment & Office | WE DO",
    description:
      "Renovation company in Dubai for villas, apartments and offices. MEP, kitchens, bathrooms, approvals and full interior renovations by WE DO.",
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

export default function RenovationDubaiLayout({ children }) {
  /*
   * Use exactly the address shown on your Google Business Profile,
   * and keep it identical on every page.
   */
  const address = {
    "@type": "PostalAddress",
    streetAddress: "X4RG+39W Jebel Ali, Jebel Ali Industrial 1",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  };

  /*
   * Sitewide Organization entity.
   */
  const organizationSchema = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "WE DO Interior Design & Fitout",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#logo`,
      url: `${siteUrl}/logo-s-Black.png`,
      contentUrl: `${siteUrl}/logo-s-Black.png`,
    },
    sameAs: [
      "https://www.instagram.com/we.do.uae/",
      "https://www.facebook.com/wedointerior",
      "https://www.linkedin.com/company/wedointerior/",
      "https://www.pinterest.com/wedo_interior/",
      "https://www.tiktok.com/@wedo_interior",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971588075603",
      email: "info@wedointerior.ae",
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
    },
    address,
  };

  /*
   * Main WE DO business entity.
   * The physical address is the Jebel Ali location; Dubai is the service area.
   */
  const localBusinessSchema = {
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: "WE DO Interior Design & Fitout",
    url: siteUrl,
    image: `${siteUrl}/og-image.jpg`,
    telephone: "+971588075603",
    email: "info@wedointerior.ae",
    priceRange: "$$$",
    parentOrganization: { "@id": `${siteUrl}/#organization` },
    address,
    areaServed: { "@type": "City", name: "Dubai" },
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "WE DO Interior Design & Fitout",
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-AE",
  };

  /*
   * WebPage schema for the Renovation Dubai page.
   */
  const webPageSchema = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Renovation Company Dubai | Villa, Apartment & Office | WE DO",
    description:
      "Renovation company in Dubai for villas, apartments and offices, covering MEP upgrades, kitchens, bathrooms, approvals and full interior renovations.",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#business` },
    publisher: { "@id": `${siteUrl}/#organization` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    mainEntity: { "@id": `${pageUrl}#service` },
    dateModified: "2026-10-07",
    inLanguage: "en-AE",
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Renovation Dubai", item: pageUrl },
    ],
  };

  /*
   * Main Service schema — links to each renovation spoke page.
   */
  const serviceSchema = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Renovation Company Dubai",
    url: pageUrl,
    serviceType: "Renovation",
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: { "@type": "City", name: "Dubai" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Renovation Services",
      itemListElement: [
        ["Villa Renovation", "/villa-renovation-dubai"],
        ["Apartment Renovation", "/apartment-renovation-dubai"],
        ["Office & Commercial Renovation", "/office-renovation-dubai"],
        ["Kitchen Renovation", "/kitchen-renovation-dubai"],
        ["Bathroom Renovation", "/bathroom-renovation-dubai"],
      ].map(([name, path]) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name, url: `${siteUrl}${path}` },
      })),
    },
  };

  /*
   * HowTo schema — step text matches the visible process section.
   */
  const howToSchema = {
    "@type": "HowTo",
    "@id": `${pageUrl}#process`,
    name: "Renovation Process by WE DO",
    description:
      "Six stages from consultation and site visit through design, approvals, construction, finishes, snagging and final handover.",
    step: [
      {
        name: "Consultation & Site Visit",
        text: "We start with a conversation about your goals and your building's or community's requirements. Once you confirm you'd like to move forward, we schedule a complimentary site visit before anything gets scoped or priced.",
      },
      {
        name: "Design & 3D Visualization",
        text: "We map out layout options and material selection, and produce a full design brief with 3D visuals, so you're approving the actual design, not imagining it. Typically 4–8 weeks.",
      },
      {
        name: "Approvals",
        text: "We prepare and submit whatever approvals the project needs, based on the property and scope. Typically 4–8 weeks, usually alongside design.",
      },
      {
        name: "Construction & MEP Works",
        text: "Demolition, layout changes, and plumbing and electrical work, built exactly to the approved design. Typically 4–16 weeks, depending on scope.",
      },
      {
        name: "Joinery, Finishes & Styling",
        text: "Custom carpentry from our own factory, flooring, painting, and final material installation. Typically 4–8 weeks.",
      },
      {
        name: "Snagging & Final Handover",
        text: "A full quality inspection and walkthrough with you before you move back in or reopen.",
      },
    ].map((step, i) => ({ "@type": "HowToStep", position: i + 1, ...step })),
  };

  /*
   * FAQ schema — answers are word-for-word the visible FAQ.
   * If you edit an FAQ on the page, paste the same text here.
   */
  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: [
      [
        "How much does renovation cost in Dubai?",
        "It depends heavily on property type and scope. As a rough guide, a kitchen renovation runs around AED 15,000–180,000+, a bathroom AED 15,000–140,000+ per bathroom, a full apartment renovation AED 80,000–250,000, and a full villa renovation AED 150,000–1,000,000+ depending on whether MEP work is included. WE DO confirms exact numbers with an itemized quote after a complimentary site visit.",
      ],
      [
        "Do you renovate apartments as well as villas?",
        "Yes. WE DO handles apartment and home renovation across Dubai, including kitchen and bathroom updates, flooring, joinery, and full interior refreshes, and manages the building or developer NOC process where one applies.",
      ],
      [
        "Do you handle office and commercial renovation?",
        "Yes. WE DO provides commercial renovation in Dubai for offices, clinics, and retail spaces — layout and partition changes, MEP and electrical upgrades, flooring, and joinery, run by the same team that handles our residential projects.",
      ],
      [
        "What's the difference between renovation and fit-out?",
        "Renovation covers cosmetic and interior updates to an existing, occupied space, villa, apartment, or office. Fit-out usually means interior systems, joinery, and furnishing for a shell-and-core or newly handed-over space. Structural changes for villas are handled separately through our construction team. Many projects combine renovation and fit-out under one contract to avoid duplicate site visits.",
      ],
      [
        "What's the difference between a cosmetic and a structural renovation?",
        "Cosmetic work updates surfaces, flooring, paint, and cabinetry fronts without touching the layout, and usually needs no permit. Structural work means moving walls or extending the footprint, which needs Dubai Municipality approval and a licensed engineer's sign-off. WE DO covers the cosmetic side directly; structural work for villas goes through our construction team.",
      ],
      [
        "Do I need approval to renovate my apartment or office in Dubai?",
        "Most renovation and fit-out work needs some form of approval. For apartments, that's usually a building-management or developer NOC. For offices, it depends on the zone, Dubai Municipality, DIFC, Trakhees, or the DDA, plus Dubai Civil Defence if the work affects fire or life-safety systems. WE DO's approvals team handles this as part of the project.",
      ],
      [
        "How long does a renovation take?",
        "A single kitchen or bathroom typically takes 1–6 weeks. A full apartment or standard-scope villa renovation runs 3–4 months. Large villas, full MEP overhauls, or larger offices can run 6–8 months. NOC approvals and imported material lead times are the most common reasons a timeline extends.",
      ],
      [
        "How do I find a good renovation company near me in Dubai?",
        "Look for a company that's DED-registered, shows a real, verifiable portfolio in your property type, and gives you an itemized quote after an in-person site visit rather than a flat number over the phone. WE DO has delivered 250+ projects across Dubai over 11+ years, across villas, apartments, and offices.",
      ],
    ].map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  /*
   * One JSON-LD graph — "@context" appears once, at the top.
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      websiteSchema,
      webPageSchema,
      breadcrumbSchema,
      serviceSchema,
      howToSchema,
      faqSchema,
    ],
  };

  /*
   * IMPORTANT: this is a nested layout.
   * Do NOT add <html>, <head> or <body> — the root app/layout.js owns them.
   */
  return (
    <>
      {children}
      <script
        id="wedo-renovation-dubai-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}