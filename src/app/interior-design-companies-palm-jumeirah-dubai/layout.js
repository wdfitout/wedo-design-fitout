import "../globals.css";

const siteUrl = "https://wedointerior.ae";
const pagePath = "/interior-design-companies-palm-jumeirah-dubai";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "Interior Design Company in Palm Jumeirah, Dubai | WE DO",

  description:
    "Luxury interior design and turnkey fit-out for Palm Jumeirah villas, apartments and penthouses. In-house designers, joinery and fit-out teams by WE DO.",

  keywords: [
    "interior design company Palm Jumeirah",
    "interior design company in Palm Jumeirah",
    "interior designer Palm Jumeirah",
    "villa interior design Palm Jumeirah",
    "apartment interior design Palm Jumeirah",
    "penthouse interior design Palm Jumeirah",
    "interior fit out company Palm Jumeirah",
    "turnkey fit out Palm Jumeirah",
    "commercial interior design Palm Jumeirah",
    "luxury interior design Palm Jumeirah",
    "villa renovation Palm Jumeirah",
    "restaurant interior design Palm Jumeirah",
    "interior design Dubai",
  ],

  alternates: {
    canonical: pagePath,
  },

  openGraph: {
    title: "Interior Design Company in Palm Jumeirah, Dubai | WE DO",

    description:
      "Luxury interior design, villa renovation and turnkey fit-out services in Palm Jumeirah by WE DO Interior Design & Fitout.",

    url: pageUrl,

    siteName: "WE DO Interior Design & Fitout",

    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "WE DO Interior Design & Fitout - Palm Jumeirah",
      },
    ],

    locale: "en_AE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Interior Design Company in Palm Jumeirah, Dubai | WE DO",

    description:
      "Luxury interior design and turnkey fit-out services for villas, apartments and penthouses in Palm Jumeirah.",

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

  other: {
    publisher: "WE DO Interior Design & Fitout",
  },
};

export default function RootLayout({ children }) {
  /*
   * ============================================================
   * ORGANIZATION
   * ============================================================
   *
   * This is the main WE DO entity.
   * Keep the same @id across the website.
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
      streetAddress: "Dubai - X4RG+39W Jabel Ali, Jabel Ali Industrial 1 - Dubai",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      postalCode: "00000",
      addressCountry: "AE",
    },
  };

  /*
   * ============================================================
   * PROFESSIONAL SERVICE / BUSINESS
   * ============================================================
   *
   * Palm Jumeirah is an area served.
   * It is NOT used as the physical business address.
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
      streetAddress: "Dubai - X4RG+39W Jabel Ali, Jabel Ali Industrial 1 - Dubai",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      postalCode: "00000",
      addressCountry: "AE",
    },

    areaServed: [
      {
        "@type": "Place",
        name: "Palm Jumeirah, Dubai",
      },
      {
        "@type": "Place",
        name: "Dubai Marina, Dubai",
      },
      {
        "@type": "Place",
        name: "Downtown Dubai",
      },
      {
        "@type": "Place",
        name: "Dubai Hills Estate, Dubai",
      },
      {
        "@type": "Place",
        name: "Emirates Hills, Dubai",
      },
    ],

    serviceOffered: [
      {
        "@type": "Service",
        name: "Villa Interior Design",
        serviceType: "Villa Interior Design",
        areaServed: {
          "@type": "Place",
          name: "Palm Jumeirah, Dubai",
        },
      },
      {
        "@type": "Service",
        name: "Apartment Interior Design",
        serviceType: "Apartment Interior Design",
        areaServed: {
          "@type": "Place",
          name: "Palm Jumeirah, Dubai",
        },
      },
      {
        "@type": "Service",
        name: "Penthouse Interior Design",
        serviceType: "Penthouse Interior Design",
        areaServed: {
          "@type": "Place",
          name: "Palm Jumeirah, Dubai",
        },
      },
      {
        "@type": "Service",
        name: "Restaurant Interior Design",
        serviceType: "Restaurant Interior Design",
        areaServed: {
          "@type": "Place",
          name: "Palm Jumeirah, Dubai",
        },
      },
      {
        "@type": "Service",
        name: "Interior Fit-Out",
        serviceType: "Interior Fit-Out",
        areaServed: {
          "@type": "Place",
          name: "Palm Jumeirah, Dubai",
        },
      },
    ],
  };

  /*
   * ============================================================
   * WEBPAGE
   * ============================================================
   */
  const webPageSchema = {
    "@type": "WebPage",
    "@id": `${pageUrl}/#webpage`,

    url: pageUrl,

    name: "Interior Design Company in Palm Jumeirah, Dubai",

    description:
      "Luxury residential and commercial interior design, renovation and turnkey fit-out services across Palm Jumeirah, Dubai.",

    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "WE DO Interior Design & Fitout",
    },

    about: {
      "@id": `${siteUrl}/#organization`,
    },

    publisher: {
      "@id": `${siteUrl}/#organization`,
    },

    breadcrumb: {
      "@id": `${pageUrl}/#breadcrumb`,
    },

    inLanguage: "en-AE",
  };

  /*
   * ============================================================
   * BREADCRUMBS
   * ============================================================
   *
   * Keep this aligned with the visible breadcrumb navigation.
   *
   * If /services is NOT the actual parent page in your website,
   * change this to the real parent URL.
   */
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
        name: "Services",
        item: `${siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Palm Jumeirah",
        item: pageUrl,
      },
    ],
  };

  /*
   * ============================================================
   * MAIN SERVICE
   * ============================================================
   */
  const serviceSchema = {
    "@type": "Service",
    "@id": `${pageUrl}/#service`,

    name: "Interior Design & Fit-Out in Palm Jumeirah",

    serviceType: "Interior Design & Fit-Out",

    provider: {
      "@id": `${siteUrl}/#business`,
    },

    areaServed: {
      "@type": "Place",
      name: "Palm Jumeirah, Dubai",
    },

    description:
      "Residential and commercial interior design, renovation and turnkey fit-out services for villas, apartments, penthouses and commercial spaces in Palm Jumeirah.",
  };

  /*
   * ============================================================
   * FAQ
   * ============================================================
   *
   * These questions should also be visibly present on the page.
   */
  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${pageUrl}/#faq`,

    mainEntity: [
      {
        "@type": "Question",

        name:
          "What should I consider when choosing an interior design company in Palm Jumeirah?",

        acceptedAnswer: {
          "@type": "Answer",

          text:
            "Consider the company's experience with Palm Jumeirah properties, interior design and fit-out capabilities, approvals experience, project management, and whether design, construction and joinery can be coordinated under one team.",
        },
      },

      {
        "@type": "Question",

        name:
          "How much does interior fit-out cost for a Palm Jumeirah villa or apartment?",

        acceptedAnswer: {
          "@type": "Answer",

          text:
            "Interior fit-out costs depend on the property's size, existing condition, scope of work and selected finishes. A full villa renovation and an apartment fit-out can have very different requirements and budgets. WE DO assesses the property and project scope before preparing a tailored quotation.",
        },
      },

      {
        "@type": "Question",

        name:
          "Do you handle DCD and Dubai Municipality approvals for Palm Jumeirah properties?",

        acceptedAnswer: {
          "@type": "Answer",

          text:
            "Yes. WE DO coordinates DCD, Dubai Municipality and applicable private-developer approvals as part of its interior design and fit-out project process, including approvals required for properties under developers such as Emaar and Damac.",
        },
      },

      {
        "@type": "Question",

        name:
          "Can WE DO manage a full villa renovation, or only new-build interiors?",

        acceptedAnswer: {
          "@type": "Answer",

          text:
            "WE DO handles both villa renovation projects and interiors for newly handed-over properties. The scope can include interior design, civil works, MEP coordination, joinery, finishes and fit-out depending on the project requirements.",
        },
      },

      {
        "@type": "Question",

        name:
          "Do you design apartments and penthouses in Palm Jumeirah, not just villas?",

        acceptedAnswer: {
          "@type": "Answer",

          text:
            "Yes. WE DO provides interior design and fit-out services for apartments and penthouses in Palm Jumeirah as well as villa interiors. Each project is developed around the property's layout, architectural character and the client's requirements.",
        },
      },

      {
        "@type": "Question",

        name:
          "What's included in your Palm Jumeirah interior fit-out service?",

        acceptedAnswer: {
          "@type": "Answer",

          text:
            "Depending on the project scope, services can include interior design, concept development, 3D visualization, mood boards, civil and MEP coordination, custom joinery, furniture and styling, approvals coordination, installation and final handover.",
        },
      },

      {
        "@type": "Question",

        name:
          "How long does a Palm Jumeirah apartment or villa fit-out typically take?",

        acceptedAnswer: {
          "@type": "Answer",

          text:
            "Project timelines vary according to the property's size, existing condition, design scope, approvals and level of fit-out. A single-room project will require less time than a complete villa or penthouse fit-out. WE DO confirms a project-specific timeline after assessing the scope.",
        },
      },

      {
        "@type": "Question",

        name:
          "Can you handle interior design remotely for overseas Palm Jumeirah property owners?",

        acceptedAnswer: {
          "@type": "Answer",

          text:
            "Yes. Design discussions, 3D visualizations, mood boards and design approvals can be handled remotely when required, allowing overseas property owners to review and approve the interior design before on-site execution begins.",
        },
      },
    ],
  };

  /*
   * ============================================================
   * HOWTO
   * ============================================================
   *
   * Keep this schema ONLY if the same process is visibly displayed
   * on the page.
   */
  const howToSchema = {
    "@type": "HowTo",
    "@id": `${pageUrl}/#process`,

    name: "WE DO Palm Jumeirah Interior Design & Fit-Out Process",

    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Consultation and Site Visit",
        text:
          "The project begins with a consultation and site assessment. Meetings can be conducted in person or remotely where appropriate.",
      },

      {
        "@type": "HowToStep",
        position: 2,
        name: "Design, Visualization and Quotation",
        text:
          "The design concept, 3D visualization, mood boards and project quotation are developed and reviewed before execution begins.",
      },

      {
        "@type": "HowToStep",
        position: 3,
        name: "Approvals and Execution",
        text:
          "Required authority and developer approvals are coordinated while civil works, MEP coordination, joinery production and other fit-out activities are managed according to the project scope.",
      },

      {
        "@type": "HowToStep",
        position: 4,
        name: "Installation and Handover",
        text:
          "The completed interiors are installed, finished and inspected before the final project handover.",
      },
    ],
  };

  /*
   * ============================================================
   * PROJECT COLLECTION
   * ============================================================
   *
   * IMPORTANT:
   * Only add project URLs that actually exist and are genuinely
   * displayed/referenced on this Palm Jumeirah page.
   *
   * This object is intentionally left without fake project URLs.
   * Add actual Palm Jumeirah project pages if applicable.
   */
  const collectionSchema = {
    "@type": "CollectionPage",
    "@id": `${pageUrl}/#projects`,

    name: "Palm Jumeirah Interior Design Projects",

    url: pageUrl,

    description:
      "Selected interior design and fit-out projects by WE DO Interior Design & Fitout in Palm Jumeirah and across Dubai.",
  };

  /*
   * ============================================================
   * COMPLETE JSON-LD GRAPH
   * ============================================================
   */
  const jsonLd = {
    "@context": "https://schema.org",

    "@graph": [
      organizationSchema,
      businessSchema,
      webPageSchema,
      breadcrumbSchema,
      serviceSchema,
      faqSchema,
      howToSchema,
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

