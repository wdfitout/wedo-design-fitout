import "../globals.css";

const siteUrl = "https://wedointerior.ae";
const pageUrl = `${siteUrl}/interior-design-company-business-bay`;

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Interior Design Company in Business Bay, Dubai | WE DO",

  description:
    "WE DO is a luxury interior design and fit-out company serving Business Bay, Dubai, with bespoke apartment, office, commercial and turnkey interior solutions.",

  alternates: {
    canonical: "/interior-design-company-business-bay",
  },

  openGraph: {
    title: "Interior Design Company in Business Bay, Dubai | WE DO",
    description:
      "Luxury interior design and fit-out services in Business Bay, Dubai, covering apartments, offices, commercial spaces and turnkey projects.",
    url: pageUrl,
    siteName: "WE DO Interior Design & Fitout",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "WE DO Interior Design & Fitout Business Bay",
      },
    ],
    locale: "en_AE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Interior Design Company in Business Bay, Dubai | WE DO",
    description:
      "Luxury interior design and fit-out services in Business Bay, Dubai, by WE DO Interior Design & Fitout.",
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

export default function RootLayout({ children }) {
  /*
   * Keep the Organization entity consistent across the website.
   * IMPORTANT:
   * Replace the address below with the exact official WE DO
   * business address used on the website and Google Business Profile.
   */
  const organizationSchema = {
    "@context": "https://schema.org",
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
  };

  /*
   * WebPage schema for this specific Business Bay landing page.
   */
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}/#webpage`,
    url: pageUrl,
    name: "Interior Design Company in Business Bay, Dubai",
    description:
      "Luxury interior design and fit-out services in Business Bay, Dubai, including apartment, office and commercial interior design.",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "WE DO Interior Design & Fitout",
    },
    about: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "en-AE",
  };

  /*
   * Breadcrumb schema.
   */
  const breadcrumbSchema = {
  "@context": "https://schema.org",
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
      name: "Interior Design",
      item: `${siteUrl}/interior-design-dubai`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Business Bay",
      item: pageUrl,
    },
  ],
};

  /*
   * Business entity.
   *
   * Business Bay is treated as an area served, NOT as the company's
   * physical street address.
   *
   * Add the real WE DO address here if you want a LocalBusiness entity.
   */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: "WE DO Interior Design & Fitout",
    url: siteUrl,
    image: `${siteUrl}/og-image.jpg`,
    telephone: "+971588075603",
    priceRange: "$$$",

    parentOrganization: {
      "@id": `${siteUrl}/#organization`,
    },

    areaServed: [
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
    ],

    serviceOffered: [
      {
        "@type": "Service",
        name: "Interior Design in Business Bay",
        serviceType: "Interior Design",
        areaServed: {
          "@type": "Place",
          name: "Business Bay, Dubai",
        },
      },
      {
        "@type": "Service",
        name: "Apartment Interior Design in Business Bay",
        serviceType: "Apartment Interior Design",
        areaServed: {
          "@type": "Place",
          name: "Business Bay, Dubai",
        },
      },
      {
        "@type": "Service",
        name: "Office Interior Design in Business Bay",
        serviceType: "Office Interior Design",
        areaServed: {
          "@type": "Place",
          name: "Business Bay, Dubai",
        },
      },
      {
        "@type": "Service",
        name: "Commercial Interior Design in Business Bay",
        serviceType: "Commercial Interior Design",
        areaServed: {
          "@type": "Place",
          name: "Business Bay, Dubai",
        },
      },
      {
        "@type": "Service",
        name: "Interior Fit-Out in Business Bay",
        serviceType: "Interior Fit-Out",
        areaServed: {
          "@type": "Place",
          name: "Business Bay, Dubai",
        },
      },
    ],
  };

  /*
   * FAQ schema.
   *
   * Only keep these questions if the same questions and answers
   * are visibly present on the page.
   */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does an office fit-out in Business Bay take?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Office fit-outs typically take six to twelve weeks depending on the project size, scope and complexity. Required authority approvals are coordinated as part of the project process.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide turnkey fit-out services in Business Bay?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. WE DO provides turnkey interior design and fit-out services covering design, approvals, execution and final handover.",
        },
      },
      {
        "@type": "Question",
        name: "Do you design luxury apartments in Business Bay?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. WE DO provides bespoke apartment interior design for residences in Business Bay, with design and fit-out services tailored to the space and client's requirements.",
        },
      },
    ],
  };

  /*
   * Business Bay project collection.
   *
   * Only include URLs that actually exist and are visibly connected
   * to this Business Bay project collection on the page.
   */
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}/#projects`,
    name: "Business Bay Interior Design Projects",
    url: pageUrl,
    description:
      "Selected interior design and fit-out projects in Business Bay, Dubai by WE DO Interior Design & Fitout.",

    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Business Bay Apartment Interior Design",
          url: `${siteUrl}/business-bay-apartment`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Business Bay Office Fit-Out",
          url: `${siteUrl}/business-bay-office-fit-out`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Business Bay Cafe Interior Design",
          url: `${siteUrl}/business-bay-cafe-interior`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Business Bay Restaurant Interior Design",
          url: `${siteUrl}/business-bay-restaurant`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Business Bay Travel Agency Interior Design",
          url: `${siteUrl}/business-bay-travel-agency`,
        },
      ],
    },
  };

  /*
   * Combine schemas into one JSON-LD graph.
   *
   * This is cleaner than having multiple independent JSON-LD
   * script blocks and makes entity relationships easier to understand.
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      webPageSchema,
      breadcrumbSchema,
      localBusinessSchema,
      faqSchema,
      collectionSchema,
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <link rel="icon" href="/favicon.ico" />

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

