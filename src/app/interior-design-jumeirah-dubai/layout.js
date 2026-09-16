import "../globals.css";

const siteUrl = "https://wedointerior.ae";
const pagePath = "/interior-design-jumeirah-dubai";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata = {
  title: "Interior Design in Jumeirah Dubai | WE DO Interior Design & Fitout",

  description:
    "Luxury interior design and turnkey fit-out services in Jumeirah Dubai for villas, apartments, offices and commercial spaces. WE DO delivers bespoke interiors with in-house design and fit-out teams.",

  keywords: [
    "interior design company Jumeirah",
    "interior design company in Jumeirah Dubai",
    "interior designers Jumeirah Dubai",
    "villa interior design Jumeirah",
    "apartment interior design Jumeirah",
    "office interior design Jumeirah",
    "interior fit out company Jumeirah",
    "turnkey fit out Jumeirah",
    "commercial interior design Jumeirah",
    "luxury interior design Jumeirah",
    "renovation services Jumeirah",
    "design and build company Dubai",
  ],

  metadataBase: new URL(`${siteUrl}/`),

  openGraph: {
    title: "Interior Design in Jumeirah Dubai | WE DO",

    description:
      "Luxury interior design and turnkey fit-out services in Jumeirah Dubai for villas, apartments, offices and commercial spaces.",

    url: pageUrl,

    siteName: "WE DO Interior Design & Fitout",

    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Interior Design Jumeirah Dubai - WE DO",
      },
    ],

    locale: "en_AE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Interior Design in Jumeirah Dubai | WE DO",

    description:
      "Luxury interior design and turnkey fit-out services in Jumeirah Dubai.",

    images: [`${siteUrl}/og-image.jpg`],
  },

  alternates: {
    canonical: pagePath,
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

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  /*
   * =========================================================
   * ORGANIZATION
   * =========================================================
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
      "https://www.instagram.com/we.do.uae",
      "https://www.facebook.com/wedointerior",
    ],

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971 58 807 5603",
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
    },

    address: {
      "@type": "PostalAddress",
      streetAddress: "WH-05 A, Jebel Ali Industrial 1",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      postalCode: "00000",
      addressCountry: "AE",
    },
  };

  /*
   * =========================================================
   * BUSINESS
   * =========================================================
   */

  const businessSchema = {
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,

    name: "WE DO Interior Design & Fitout",

    url: siteUrl,

    image: `${siteUrl}/og-image.jpg`,

    telephone: "+971 58 807 5603",

    email: "info@wedointerior.ae",

    priceRange: "$$$",

    parentOrganization: {
      "@id": `${siteUrl}/#organization`,
    },

    address: {
      "@type": "PostalAddress",
      streetAddress: "WH-05 A, Jebel Ali Industrial 1",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      postalCode: "00000",
      addressCountry: "AE",
    },

    areaServed: [
      {
        "@type": "Place",
        name: "Jumeirah",
      },
      {
        "@type": "Place",
        name: "Jumeirah 1",
      },
      {
        "@type": "Place",
        name: "Jumeirah 2",
      },
      {
        "@type": "Place",
        name: "Jumeirah 3",
      },
      {
        "@type": "Place",
        name: "Jumeirah Beach Road",
      },
      {
        "@type": "Place",
        name: "La Mer",
      },
      {
        "@type": "Place",
        name: "Umm Suqeim",
      },
      {
        "@type": "Place",
        name: "Al Wasl",
      },
      {
        "@type": "Place",
        name: "City Walk",
      },
    ],

    serviceOffered: [
      {
        "@type": "Service",
        name: "Villa Interior Design in Jumeirah",
        serviceType: "Villa Interior Design",
        areaServed: {
          "@type": "Place",
          name: "Jumeirah",
        },
      },

      {
        "@type": "Service",
        name: "Apartment Interior Design in Jumeirah",
        serviceType: "Apartment Interior Design",
        areaServed: {
          "@type": "Place",
          name: "Jumeirah",
        },
      },

      {
        "@type": "Service",
        name: "Office Interior Design in Jumeirah",
        serviceType: "Office Interior Design",
        areaServed: {
          "@type": "Place",
          name: "Jumeirah",
        },
      },

      {
        "@type": "Service",
        name: "Commercial Interior Design in Jumeirah",
        serviceType: "Commercial Interior Design",
        areaServed: {
          "@type": "Place",
          name: "Jumeirah",
        },
      },

      {
        "@type": "Service",
        name: "Restaurant Interior Design in Jumeirah",
        serviceType: "Restaurant Interior Design",
        areaServed: {
          "@type": "Place",
          name: "Jumeirah",
        },
      },

      {
        "@type": "Service",
        name: "Interior Fit-Out in Jumeirah",
        serviceType: "Interior Fit-Out",
        areaServed: {
          "@type": "Place",
          name: "Jumeirah",
        },
      },
    ],
  };

  /*
   * =========================================================
   * WEBSITE
   * =========================================================
   */

  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,

    url: siteUrl,

    name: "WE DO Interior Design & Fitout",

    publisher: {
      "@id": `${siteUrl}/#organization`,
    },

    inLanguage: "en-AE",
  };

  /*
   * =========================================================
   * WEBPAGE
   * =========================================================
   */

  const webPageSchema = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,

    url: pageUrl,

    name: "Interior Design in Jumeirah Dubai",

    description:
      "Luxury interior design and turnkey fit-out services in Jumeirah Dubai for villas, apartments, offices and commercial spaces.",

    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },

    about: {
      "@id": `${siteUrl}/#business`,
    },

    publisher: {
      "@id": `${siteUrl}/#organization`,
    },

    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },

    inLanguage: "en-AE",

    mainEntity: {
      "@id": `${pageUrl}#service`,
    },
  };

  /*
   * =========================================================
   * BREADCRUMB
   * =========================================================
   */

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,

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
        name: "Interior Design Dubai",
        item: `${siteUrl}/interior-design-dubai`,
      },

      {
        "@type": "ListItem",
        position: 3,
        name: "Jumeirah",
        item: pageUrl,
      },
    ],
  };

  /*
   * =========================================================
   * PAGE SERVICE
   * =========================================================
   */

  const serviceSchema = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,

    name: "Interior Design & Fit-Out in Jumeirah Dubai",

    serviceType: "Interior Design & Fit-Out",

    provider: {
      "@id": `${siteUrl}/#business`,
    },

    areaServed: {
      "@type": "Place",
      name: "Jumeirah",
    },

    description:
      "Luxury residential and commercial interior design and turnkey fit-out services for villas, apartments, offices, restaurants and other spaces in Jumeirah Dubai.",
  };

  /*
   * =========================================================
   * FAQ
   * =========================================================
   *
   * Keep these questions visible on the page.
   */

  const faqSchema = {
    
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What interior design services do you offer in Jumeirah?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide a wide range of interior design services, including renovation, fit-out, room redesign, and complete home transformation services."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work in villas and apartments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. WE DO provides villa and apartment interior design and delivers projects across both residential property types."
      }
    },
    {
      "@type": "Question",
      "name": "Can selected rooms be redesigned instead of the full house?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Projects can range from individual spaces to full-home redesigns."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide fit-out after design approval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. WE DO Interior Design & Fitout manages both interior design and fit-out execution."
      }
    },
    {
      "@type": "Question",
      "name": "Can you modernise older Jumeirah homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Renovation and interior upgrades form a major part of our work, including modernising and transforming existing homes."
      }
    },
    {
      "@type": "Question",
      "name": "Do you support approvals where required?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our team assists with approvals coordination where applicable."
      }
    }
  ]
}

  /*
   * =========================================================
   * COMPLETE JSON-LD
   * =========================================================
   */

  const jsonLd = {
    "@context": "https://schema.org",

    "@graph": [
      organizationSchema,
      businessSchema,
      websiteSchema,
      webPageSchema,
      breadcrumbSchema,
      serviceSchema,
      faqSchema,
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}