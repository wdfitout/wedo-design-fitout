
import "../globals.css";

const siteUrl = "https://wedointerior.ae";
const pagePath = "/interior-design-dubai";
const pageUrl = `${siteUrl}${pagePath}`;

/*
 * PAGE METADATA
 */

export const metadata = {
  title: "Areas We Serve in Dubai | Interior Design & Fit-Out | WE DO",

  description:
    "Award-winning interior design & fit-out company in Dubai. ISO certified, 250+ projects across Business Bay, Downtown, Palm Jumeirah, Marina & more.",

  metadataBase: new URL(`${siteUrl}/`),

  openGraph: {
    title: "Dubai Areas We Serve | WE DO Interior",

    description:
      "Explore the Dubai communities served by WE DO Interior Design & Fit-Out, including Business Bay, Downtown Dubai, Dubai Creek Harbour, Jumeirah and more.",

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

    title: "Dubai Areas We Serve | WE DO Interior",

    description:
      "Explore the Dubai communities served by WE DO Interior Design & Fit-Out, including Business Bay, Downtown Dubai, Palm Jumeirah and Dubai Marina.",

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

/*
 * AREAS SHOWN ON THE PAGE
 *
 * Keep these URLs synchronized with the actual location cards.
 */

const areas = [
  {
    name: "Business Bay Interior Design",
    path: "/interior-design-company-business-bay",
  },
  {
    name: "Downtown Dubai Interior Design",
    path: "/interior-design-downtown-dubai",
  },
  {
    name: "Dubai Creek Harbour Interior Design",
    path: "/interior-design-dubai-creek-harbour",
  },
  {
    name: "Jumeirah Interior Design",
    path: "/interior-design-jumeirah-dubai",
  },
  {
    name: "Dubai Hills Interior Design",
    path: "/interior-design-companies-near-dubai-hills",
  },
  {
    name: "Palm Jumeirah Interior Design",
    path: "/interior-design-companies-palm-jumeirah-dubai",
  },
  {
    name: "Dubai Marina Interior Design",
    path: "/best-interior-design-company-in-dubai-marina",
  },
  {
    name: "Royal Atlantis Interior Design",
    path: "/royal-atlantis-dubai-interior-design-company",
  },
];

export default function InteriorDesignDubaiLayout({ children }) {
  /*
   * This nested layout references the Organization,
   * business and WebSite entities defined in the root layout.
   */

  const webPageSchema = {
    "@type": "WebPage",

    "@id": `${pageUrl}#webpage`,

    url: pageUrl,

    name: "Interior Design Dubai Areas We Serve",

    description:
      "Explore the Dubai communities served by WE DO Interior Design & Fit-Out and find location-specific interior design and fit-out services.",

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
      "@id": `${pageUrl}#areas`,
    },

    inLanguage: "en-AE",
  };

  /*
   * BREADCRUMB
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
        name: "Interior Design Dubai Areas We Serve",
        item: pageUrl,
      },
    ],
  };

  /*
   * AREAS SERVED COLLECTION
   */

  const areasCollectionSchema = {
    "@type": "CollectionPage",

    "@id": `${pageUrl}#areas`,

    name: "Interior Design Dubai Areas We Serve",

    url: pageUrl,

    description:
      "Explore the Dubai communities served by WE DO Interior Design & Fit-Out, with links to location-specific interior design and fit-out services.",

    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },

    about: {
      "@id": `${siteUrl}/#business`,
    },

    mainEntity: {
      "@type": "ItemList",

      "@id": `${pageUrl}#areas-list`,

      name: "WE DO Interior Design Areas We Serve",

      itemListOrder: "https://schema.org/ItemListUnordered",

      numberOfItems: areas.length,

      itemListElement: areas.map((area, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: area.name,
        url: `${siteUrl}${area.path}`,
      })),
    },
  };

  /*
   * COMPLETE JSON-LD GRAPH
   */

  const jsonLd = {
    "@context": "https://schema.org",

    "@graph": [
      webPageSchema,
      breadcrumbSchema,
      areasCollectionSchema,
    ],
  };

  /*
   * NESTED LAYOUT
   *
   * The root app/layout.js owns <html> and <body>.
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
