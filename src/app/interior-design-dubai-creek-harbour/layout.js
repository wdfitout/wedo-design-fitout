import "../globals.css";

const siteUrl = "https://wedointerior.ae";
const pagePath = "/interior-design-dubai-creek-harbour";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata = {
  title: "Interior Design Company in Dubai Creek Harbour | WE DO",

  description:
    "Luxury interior design and turnkey fit-out services in Dubai Creek Harbour for apartments, offices, restaurants and commercial spaces. WE DO delivers bespoke interiors with in-house design and fit-out teams.",

  metadataBase: new URL(`${siteUrl}/`),

  openGraph: {
    title: "Interior Design Company in Dubai Creek Harbour | WE DO",

    description:
      "Luxury interior design and turnkey fit-out services in Dubai Creek Harbour for apartments, offices, restaurants and commercial spaces.",

    url: pageUrl,

    siteName: "WE DO Interior Design & Fitout",

    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "WE DO Interior Design & Fitout",
      },
    ],

    locale: "en_AE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Interior Design Company in Dubai Creek Harbour | WE DO",

    description:
      "Luxury interior design and turnkey fit-out services in Dubai Creek Harbour for apartments, offices and commercial spaces.",

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

      telephone: "+9+971588075603",

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

    telephone: "+971588075603",

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
        name: "Dubai Creek Harbour",
      },
      {
        "@type": "Place",
        name: "Downtown Dubai",
      },
      {
        "@type": "Place",
        name: "Business Bay",
      },
      {
        "@type": "Place",
        name: "DIFC",
      },
      {
        "@type": "Place",
        name: "Dubai Marina",
      },
      {
        "@type": "Place",
        name: "Palm Jumeirah",
      },
      {
        "@type": "Place",
        name: "Dubai Hills Estate",
      },
      {
        "@type": "Place",
        name: "Emirates Hills",
      },
    ],

    serviceOffered: [
      {
        "@type": "Service",

        name: "Apartment Interior Design in Dubai Creek Harbour",

        serviceType: "Apartment Interior Design",

        areaServed: {
          "@type": "Place",
          name: "Dubai Creek Harbour",
        },
      },

      {
        "@type": "Service",

        name: "Office Interior Design in Dubai Creek Harbour",

        serviceType: "Office Interior Design",

        areaServed: {
          "@type": "Place",
          name: "Dubai Creek Harbour",
        },
      },

      {
        "@type": "Service",

        name: "Commercial Interior Design in Dubai Creek Harbour",

        serviceType: "Commercial Interior Design",

        areaServed: {
          "@type": "Place",
          name: "Dubai Creek Harbour",
        },
      },

      {
        "@type": "Service",

        name: "Restaurant Interior Design in Dubai Creek Harbour",

        serviceType: "Restaurant Interior Design",

        areaServed: {
          "@type": "Place",
          name: "Dubai Creek Harbour",
        },
      },

      {
        "@type": "Service",

        name: "Interior Fit-Out in Dubai Creek Harbour",

        serviceType: "Interior Fit-Out",

        areaServed: {
          "@type": "Place",
          name: "Dubai Creek Harbour",
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
   * WEB PAGE
   * =========================================================
   */

  const webPageSchema = {
    "@type": "WebPage",

    "@id": `${pageUrl}#webpage`,

    url: pageUrl,

    name: "Interior Design Company in Dubai Creek Harbour",

    description:
      "Luxury interior design and turnkey fit-out services in Dubai Creek Harbour for apartments, offices, restaurants and commercial spaces.",

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

    mainEntity: {
      "@id": `${pageUrl}#service`,
    },

    inLanguage: "en-AE",
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

        name: "Dubai Creek Harbour",

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

    name: "Interior Design & Fit-Out in Dubai Creek Harbour",

    serviceType: "Interior Design & Fit-Out",

    provider: {
      "@id": `${siteUrl}/#business`,
    },

    areaServed: {
      "@type": "Place",

      name: "Dubai Creek Harbour",
    },

    description:
      "Residential and commercial interior design and turnkey fit-out services for apartments, offices, restaurants and other commercial spaces in Dubai Creek Harbour.",
  };

  /*
   * =========================================================
   * FAQ
   * =========================================================
   */

  const faqSchema = {
    "@type": "FAQPage",

    "@id": `${pageUrl}#faq`,

    mainEntity: [
      {
        "@type": "Question",

        name:
          "Do you provide interior design for Creek Palace and Creek Waters?",

        acceptedAnswer: {
          "@type": "Answer",

          text:
            "Yes, WE DO provides interior design and fit-out solutions for projects in Dubai Creek Harbour, including properties such as Creek Palace and Creek Waters, subject to the applicable building and developer requirements.",
        },
      },

      {
        "@type": "Question",

        name:
          "Do you offer turnkey fit-out services in Dubai Creek Harbour?",

        acceptedAnswer: {
          "@type": "Answer",

          text:
            "Yes, WE DO provides turnkey interior design and fit-out services in Dubai Creek Harbour, covering the project from design and approvals coordination through execution and handover.",
        },
      },

      {
        "@type": "Question",

        name: "Can you furnish my apartment for Airbnb?",

        acceptedAnswer: {
          "@type": "Answer",

          text:
            "Yes, WE DO provides furnishing and interior renovation packages for apartments intended for Airbnb and other short-term rental use, depending on the project requirements.",
        },
      },

      {
        "@type": "Question",

        name: "Do you handle complete design and execution?",

        acceptedAnswer: {
          "@type": "Answer",

          text:
            "Yes. WE DO can manage the project from initial consultation and interior design through design development, approvals coordination, fit-out execution and final completion, depending on the agreed scope.",
        },
      },

      {
        "@type": "Question",

        name:
          "Can you customize the interior design according to my style?",

        acceptedAnswer: {
          "@type": "Answer",

          text:
            "Yes. WE DO develops customized interior designs based on the client's requirements, preferred style, functional needs, materials and project objectives.",
        },
      },

      {
        "@type": "Question",

        name:
          "How much does interior design cost in Dubai Creek Harbour?",

        acceptedAnswer: {
          "@type": "Answer",

          text:
            "Interior design costs in Dubai Creek Harbour vary depending on the apartment size, material selection, level of customization and overall scope of work. A project-specific quotation is required to determine the final cost.",
        },
      },

      {
        "@type": "Question",

        name: "How long does an interior design project take?",

        acceptedAnswer: {
          "@type": "Answer",

          text:
            "Project timelines vary according to the property, scope of work, approvals, materials and finishing requirements. Typical indicative timelines are 3–5 weeks for a studio apartment, 5–8 weeks for a 1–2 bedroom apartment and 8–12 weeks for a full fit-out. Fast-track options may be available for suitable projects.",
        },
      },
    ],
  };

  /*
   * =========================================================
   * COMPLETE JSON-LD GRAPH
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

  /*
   * =========================================================
   * IMPORTANT:
   * This is a nested layout.
   *
   * DO NOT use:
   * <html>
   * <head>
   * <body>
   *
   * The root app/layout.js owns those elements.
   * =========================================================
   */

  return (
    <>
      {children}

      <script
        id="wedo-creek-harbour-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
}