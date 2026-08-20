import '../globals.css';

export const metadata = {
  title: "Office Renovation Dubai | DED-Registered Contractor | WE DO",
  description:
    "Office renovation in Dubai: flooring, partitions, MEP & approvals under one fixed-price contract. DED-registered, 250+ projects. Get in touch to start.",
  keywords: [
    'Office Renovation Dubai',
    'Office Fit Out Dubai',
    'Office Partition Renovation Dubai',
    'Office Renovation Company Dubai',
    'Commercial Renovation Dubai',
    'Office MEP Upgrade Dubai',
    'Office Flooring Dubai',
    'Office Renovation Cost Dubai',
  ],
  publisher: ['WEDO Interior Design and Fit out'],
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/office-renovation-dubai',
  },
  openGraph: {
    title: "Office Renovation Dubai | DED-Registered Contractor | WE DO",
    description:
      "Office renovation in Dubai: flooring, partitions, MEP & approvals under one fixed-price contract. DED-registered, 250+ projects. Get in touch to start.",
    url: 'https://wedointerior.ae/office-renovation-dubai',
    // Use a real completed-project photo (before/after if available), never the logo
    images: [
      {
        url: '/images/office-renovation-dubai.webp',
        width: 1200,
        height: 630,
        alt: 'Office renovation project in Dubai by WE DO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Office Renovation Dubai | DED-Registered Contractor | WE DO",
    description:
      "Office renovation in Dubai: flooring, partitions, MEP & approvals under one fixed-price contract. DED-registered, 250+ projects. Get in touch to start.",
    images: ['/images/office-renovation-dubai.webp'],
  },
};

const officeRenovationSchema = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "WebPage",
      "@id": "https://wedointerior.ae/office-renovation-dubai#webpage",
      "url": "https://wedointerior.ae/office-renovation-dubai",
      "name": "Office Renovation Dubai",
      "headline": "Office Renovation Dubai",
      "description": "Office renovation in Dubai covering flooring, partitions, ceilings, lighting, joinery and MEP upgrades for existing offices under one fixed-price contract.",
      "inLanguage": "en-AE",
      "isPartOf": {
        "@id": "https://wedointerior.ae/#website"
      },
      "about": {
        "@id": "https://wedointerior.ae/office-renovation-dubai#service"
      },
      "publisher": {
        "@id": "https://wedointerior.ae/#business"
      },
      "breadcrumb": {
        "@id": "https://wedointerior.ae/office-renovation-dubai#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "https://wedointerior.ae/office-renovation-dubai#primaryimage"
      },
      "dateModified": "2026-08-19"
    },

    {
      "@type": "Service",
      "@id": "https://wedointerior.ae/office-renovation-dubai#service",
      "name": "Office Renovation Dubai",
      "serviceType": "Office Renovation",
      "url": "https://wedointerior.ae/office-renovation-dubai",
      "description": "Office renovation and refurbishment for existing commercial spaces in Dubai, including flooring, partitions, ceilings, lighting, joinery and MEP upgrades under one fixed-price contract, delivered by in-house design, civil works, decoration and joinery teams.",
      "provider": {
        "@id": "https://wedointerior.ae/#business"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Dubai"
        },
        {
          "@type": "Place",
          "name": "Business Bay"
        },
        {
          "@type": "Place",
          "name": "DIFC"
        },
        {
          "@type": "Place",
          "name": "JLT"
        },
        {
          "@type": "Place",
          "name": "Dubai Marina"
        },
        {
          "@type": "Place",
          "name": "Downtown Dubai"
        },
        {
          "@type": "Place",
          "name": "Dubai Media City"
        },
        {
          "@type": "Place",
          "name": "Sheikh Zayed Road"
        },
        {
          "@type": "Place",
          "name": "Al Quoz"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Office Renovation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Office Flooring Renovation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Office Partition Renovation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Office Ceiling Renovation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Office Lighting Renovation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Office Joinery Renovation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Office MEP Upgrades"
            }
          }
        ]
      }
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://wedointerior.ae/#business",
      "name": "WE DO Interior Design & Fit-Out",
      "url": "https://wedointerior.ae/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wedointerior.ae/images/logo.svg"
      },
      "image": [
        "https://wedointerior.ae/images/logo.svg"
      ],
      "telephone": "+971588075603",
      "email": "info@wedointerior.ae",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "WH-05 A, Jebel Ali Industrial 1",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "areaServed": {
        "@type": "City",
        "name": "Dubai"
      },
      "award": "Luxury Lifestyle Awards Winner 2026",
      "sameAs": [
        "https://www.instagram.com/we.do.uae/",
        "https://www.linkedin.com/company/wedointeriors/",
        "https://www.pinterest.com/wedo_interior/",
        "https://www.facebook.com/wedofitout",
        "https://www.tiktok.com/@wedo_interior"
      ]
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://wedointerior.ae/office-renovation-dubai#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://wedointerior.ae/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://wedointerior.ae/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Office Renovation Dubai",
          "item": "https://wedointerior.ae/office-renovation-dubai"
        }
      ]
    },

    {
      "@type": "ImageObject",
      "@id": "https://wedointerior.ae/office-renovation-dubai#primaryimage",
      "url": "https://wedointerior.ae/images/office-renovation-dubai.webp",
      "contentUrl": "https://wedointerior.ae/images/office-renovation-dubai.webp",
      "name": "Office Renovation Project in Dubai",
      "description": "Office renovation project in Dubai showing a professionally renovated commercial workspace.",
      "caption": "Office Renovation Project in Dubai",
      "representativeOfPage": true
    },

    {
      "@type": "WebSite",
      "@id": "https://wedointerior.ae/#website",
      "url": "https://wedointerior.ae/",
      "name": "WE DO Interior Design & Fit-Out",
      "publisher": {
        "@id": "https://wedointerior.ae/#business"
      },
      "inLanguage": "en-AE"
    }

  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(officeRenovationSchema),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}