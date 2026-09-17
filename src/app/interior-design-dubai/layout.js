import "../globals.css";

const siteUrl = "https://wedointerior.ae";
const pagePath = "/interior-design-dubai";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata = {
  title:
    "Interior Design Dubai | Areas We Serve – Business Bay, Downtown & More",

  description:
    "Interior design and fit-out services in Dubai by WE DO. Luxury residential and commercial interiors across Business Bay, Downtown Dubai, Palm Jumeirah, Dubai Creek Harbour and other Dubai areas.",



  metadataBase: new URL(`${siteUrl}/`),

  openGraph: {
    title: "Interior Design Dubai | WE DO Interior Design & Fitout",

    description:
      "Luxury residential and commercial interior design and fit-out services across Dubai, including Business Bay, Downtown Dubai, Palm Jumeirah and Dubai Creek Harbour.",

    url: pageUrl,

    siteName: "WE DO Interior Design & Fitout",

    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "WE DO Interior Design & Fitout Dubai",
      },
    ],

    locale: "en_AE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Interior Design Dubai | WE DO Interior Design & Fitout",

    description:
      "Luxury residential and commercial interior design and fit-out services across Dubai.",

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

export default function InteriorDesignDubaiLayout({ children }) {
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

      telephone: "+971588075603",

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
   * MAIN BUSINESS ENTITY
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
        name: "Dubai",
      },

      {
        "@type": "Place",
        name: "Business Bay",
      },

      {
        "@type": "Place",
        name: "Downtown Dubai",
      },

      {
        "@type": "Place",
        name: "Palm Jumeirah",
      },

      {
        "@type": "Place",
        name: "Dubai Creek Harbour",
      },

      {
        "@type": "Place",
        name: "Dubai Marina",
      },

      {
        "@type": "Place",
        name: "Dubai Hills Estate",
      },

      {
        "@type": "Place",
        name: "Jumeirah",
      },

      {
        "@type": "Place",
        name: "Emirates Hills",
      },

      {
        "@type": "Place",
        name: "DIFC",
      },
    ],

    serviceOffered: [
      {
        "@type": "Service",

        name: "Residential Interior Design in Dubai",

        serviceType: "Residential Interior Design",

        areaServed: {
          "@type": "Place",
          name: "Dubai",
        },
      },

      {
        "@type": "Service",

        name: "Commercial Interior Design in Dubai",

        serviceType: "Commercial Interior Design",

        areaServed: {
          "@type": "Place",
          name: "Dubai",
        },
      },

      {
        "@type": "Service",

        name: "Interior Fit-Out in Dubai",

        serviceType: "Interior Fit-Out",

        areaServed: {
          "@type": "Place",
          name: "Dubai",
        },
      },

      {
        "@type": "Service",

        name: "Villa Interior Design in Dubai",

        serviceType: "Villa Interior Design",

        areaServed: {
          "@type": "Place",
          name: "Dubai",
        },
      },

      {
        "@type": "Service",

        name: "Apartment Interior Design in Dubai",

        serviceType: "Apartment Interior Design",

        areaServed: {
          "@type": "Place",
          name: "Dubai",
        },
      },

      {
        "@type": "Service",

        name: "Office Interior Design in Dubai",

        serviceType: "Office Interior Design",

        areaServed: {
          "@type": "Place",
          name: "Dubai",
        },
      },

      {
        "@type": "Service",

        name: "Restaurant Interior Design in Dubai",

        serviceType: "Restaurant Interior Design",

        areaServed: {
          "@type": "Place",
          name: "Dubai",
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
   * MAIN WEBPAGE
   * =========================================================
   */

  const webPageSchema = {
    "@type": "WebPage",

    "@id": `${pageUrl}#webpage`,

    url: pageUrl,

    name: "Interior Design Dubai",

    description:
      "Interior design and fit-out services across Dubai by WE DO Interior Design & Fitout, serving residential and commercial properties across major Dubai areas.",

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

        item: pageUrl,
      },
    ],
  };

  /*
   * =========================================================
   * MAIN DUBAI SERVICE
   * =========================================================
   */

  const serviceSchema = {
    "@type": "Service",

    "@id": `${pageUrl}#service`,

    name: "Interior Design & Fit-Out Services in Dubai",

    serviceType: "Interior Design & Fit-Out",

    provider: {
      "@id": `${siteUrl}/#business`,
    },

    areaServed: {
      "@type": "City",

      name: "Dubai",

      containedInPlace: {
        "@type": "Country",

        name: "United Arab Emirates",
      },
    },

    description:
      "Luxury residential and commercial interior design and turnkey fit-out services across Dubai, including villas, apartments, offices, restaurants and other commercial spaces.",
  };

  /*
   * =========================================================
   * AREAS SERVED COLLECTION
   * =========================================================
   */

  const areasCollectionSchema = {
    "@type": "CollectionPage",

    "@id": `${pageUrl}#areas`,

    name: "Areas We Serve in Dubai",

    url: pageUrl,

    description:
      "WE DO provides interior design and fit-out services across major residential and commercial areas of Dubai.",

    isPartOf: {
      "@id": `${pageUrl}#webpage`,
    },

    about: {
      "@id": `${siteUrl}/#business`,
    },

    mainEntity: {
      "@type": "ItemList",

      "@id": `${pageUrl}#areas-list`,

      name: "WE DO Interior Design Areas We Serve",

      itemListOrder: "https://schema.org/ItemListOrderAscending",

      numberOfItems: 7,

      itemListElement: [
        {
          "@type": "ListItem",

          position: 1,

          name: "Business Bay Interior Design",

          url: `${siteUrl}/interior-design-company-business-bay`,
        },

        {
          "@type": "ListItem",

          position: 2,

          name: "Downtown Dubai Interior Design",

          url: `${siteUrl}/interior-design-downtown-dubai`,
        },

        {
          "@type": "ListItem",

          position: 3,

          name: "Palm Jumeirah Interior Design",

          url: `${siteUrl}/interior-design-palm-jumeirah`,
        },

        {
          "@type": "ListItem",

          position: 4,

          name: "Dubai Creek Harbour Interior Design",

          url: `${siteUrl}/interior-design-dubai-creek-harbour`,
        },

        {
          "@type": "ListItem",

          position: 5,

          name: "Dubai Marina Interior Design",

          url: `${siteUrl}/interior-design-dubai-marina`,
        },

        {
          "@type": "ListItem",

          position: 6,

          name: "Dubai Hills Interior Design",

          url: `${siteUrl}/interior-design-dubai-hills`,
        },

        {
          "@type": "ListItem",

          position: 7,

          name: "Jumeirah Interior Design",

          url: `${siteUrl}/interior-design-jumeirah`,
        },
      ],
    },
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
      areasCollectionSchema,
    ],
  };

  /*
   * =========================================================
   * NESTED LAYOUT
   *
   * IMPORTANT:
   * Do NOT add <html> or <body> here.
   * The root app/layout.js already owns them.
   * =========================================================
   */

  return (
    <>
      {children}

      <script
        id="wedo-interior-design-dubai-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
}