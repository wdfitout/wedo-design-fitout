import '../globals.css';

export const metadata = {
  title: "Apartment Renovation Dubai | Cost, NOC & Timeline | WE DO",
  description:
    "Apartment renovation in Dubai: kitchen, bathroom & full-flat fit-out under one contract.NOC handled, 250+ projects. Book a free site visit.",
  keywords: [
    'Apartment Renovation Dubai',
    'Apartment Renovation Company Dubai',
    'Kitchen Renovation Dubai',
    'Bathroom Renovation Apartment Dubai',
    'Apartment Renovation Cost Dubai',
    'Apartment Renovation NOC Dubai',
    'Apartment Renovation Timeline Dubai',
    'Flat Renovation Dubai',
  ],
  publisher: ['WEDO Interior Design and Fit out'],
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/apartment-renovation-dubai',
  },
  openGraph: {
    title: "Apartment Renovation Dubai | Cost, NOC & Timeline | WE DO",
    description:
      "Apartment renovation in Dubai: kitchen, bathroom & full-flat fit-out under one contract.NOC handled, 250+ projects. Book a free site visit.",
    url: 'https://wedointerior.ae/apartment-renovation-dubai',
    // Use a real completed-project photo here, never a render or stock photo
    images: [
      {
        url: '/images/apartment-renovation-dubai-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Apartment renovation project in Dubai by WE DO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Apartment Renovation Dubai | Cost, NOC & Timeline | WE DO",
    description:
      "Apartment renovation in Dubai: kitchen, bathroom & full-flat fit-out under one contract.NOC handled, 250+ projects. Book a free site visit.",
    images: ['/images/apartment-renovation-dubai-og.jpg'],
  },
};

// Single @graph schema — Business, WebSite, WebPage, Service, BreadcrumbList, FAQPage, HowTo
const apartmentRenovationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://wedointerior.ae/#business",
      "name": "WE DO Interior Design & Fit-Out",
      "url": "https://wedointerior.ae/",
      "telephone": "+971588075603",
      "email": "info@wedointerior.ae",
      "priceRange": "AED",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "WH-05 A, Jebel Ali Industrial 1",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://wedointerior.ae/#website",
      "url": "https://wedointerior.ae/",
      "name": "WE DO Interior Design & Fit-Out",
      "publisher": {
        "@id": "https://wedointerior.ae/#business"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://wedointerior.ae/apartment-renovation-dubai#webpage",
      "url": "https://wedointerior.ae/apartment-renovation-dubai",
      "name": "Apartment Renovation Dubai",
      "description": "Apartment renovation in Dubai including kitchen and bathroom remodeling, flooring, electrical and plumbing works, and custom joinery.",
      "dateModified": "2026-08-12",
      "isPartOf": {
        "@id": "https://wedointerior.ae/#website"
      },
      "about": {
        "@id": "https://wedointerior.ae/apartment-renovation-dubai#service"
      },
      "mainEntity": {
        "@id": "https://wedointerior.ae/apartment-renovation-dubai#service"
      },
      "publisher": {
        "@id": "https://wedointerior.ae/#business"
      },
      "breadcrumb": {
        "@id": "https://wedointerior.ae/apartment-renovation-dubai#breadcrumb"
      }
    },
    {
      "@type": "Service",
      "@id": "https://wedointerior.ae/apartment-renovation-dubai#service",
      "name": "Apartment Renovation Dubai",
      "serviceType": "Apartment Renovation & Fit-Out",
      "provider": {
        "@id": "https://wedointerior.ae/#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Dubai"
      },
      "description": "Full apartment renovation in Dubai, including kitchen and bathroom remodeling, flooring, electrical and plumbing works, and built-in joinery, delivered under one contract.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Apartment Renovation Services",
        "itemListElement": [
          { "@type": "Service", "name": "Kitchen Renovation" },
          { "@type": "Service", "name": "Bathroom Renovation" },
          { "@type": "Service", "name": "Flooring, Electrical & Plumbing" },
          { "@type": "Service", "name": "Built-In Joinery & Custom Wardrobes" }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://wedointerior.ae/apartment-renovation-dubai#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wedointerior.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://wedointerior.ae/services" },
        { "@type": "ListItem", "position": 3, "name": "Apartment Renovation Dubai", "item": "https://wedointerior.ae/apartment-renovation-dubai" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://wedointerior.ae/apartment-renovation-dubai#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the cost of apartment renovation in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The estimated cost of a comprehensive apartment renovation by WE DO is around AED 80 to AED 150 per square foot, or approximately AED 40,000 to AED 300,000+, depending on apartment size, scope of work, and level of customization."
          }
        },
        {
          "@type": "Question",
          "name": "How long does apartment renovation take in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A studio typically takes 3 to 5 weeks, a 1-bedroom apartment 6 to 9 weeks, a 2-bedroom apartment 8 to 12 weeks, and a 3-bedroom or larger full renovation around 10 to 16 weeks. Imported materials, custom joinery, and approvals can extend the timeline."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need approval to renovate my apartment in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many apartment renovation works require approval before construction begins. Kitchen and bathroom remodeling, layout changes, and electrical or plumbing modifications may require building management approval and, where applicable, Dubai Municipality approval."
          }
        },
        {
          "@type": "Question",
          "name": "Can I renovate an apartment I am renting in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tenants should obtain written permission from the landlord as well as any required building management approval before carrying out renovation work. Rental agreements may also restrict structural alterations."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between apartment renovation and interior design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Apartment renovation involves construction work such as kitchen and bathroom remodeling, flooring, electrical and plumbing work, and layout changes. Interior design focuses on the look and function of the space through layouts, furniture, lighting, materials, and styling."
          }
        },
        {
          "@type": "Question",
          "name": "Can I live in my apartment during renovation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For cosmetic or limited single-room work, staying in the apartment may be possible. During a full renovation involving demolition, kitchen or bathroom work, or major MEP changes, temporary relocation is usually more practical because of noise, dust, and safety considerations."
          }
        },
        {
          "@type": "Question",
          "name": "How do I choose a reliable apartment renovation company in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check that the company is properly registered, provides a written itemized contract, uses a clear staged payment structure, can show verifiable completed projects, and explains its workmanship warranty and approval process."
          }
        },
        {
          "@type": "Question",
          "name": "Is it worth renovating an apartment before renting it out in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Renovation can improve an apartment's condition, presentation, and rental appeal. Kitchen and bathroom upgrades are often useful priorities, but the right scope depends on the property's condition, location, target tenant, and expected rental return."
          }
        },
        {
          "@type": "Question",
          "name": "I have an older apartment that has not been renovated since handover. Where should I start?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start with a site inspection to identify the condition of electrical systems, plumbing, waterproofing, flooring, finishes, and the existing layout. This helps separate necessary upgrades from cosmetic improvements before a renovation scope and quotation are prepared."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://wedointerior.ae/apartment-renovation-dubai#process",
      "name": "Apartment Renovation Process in Dubai",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Site Visit & Consultation",
          "text": "The apartment is inspected and measured, and the renovation requirements, goals, and budget are discussed."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Design & 3D Preview",
          "text": "The layout, materials, finishes, and design direction are finalized and visualized before construction begins."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Approvals & NOC",
          "text": "Required building management documentation and applicable authority submissions are prepared and handled before construction."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Demolition & Preparation",
          "text": "Existing finishes are removed and the apartment is prepared and protected for construction work."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "MEP & Layout Work",
          "text": "Electrical, plumbing, and approved layout-related work are completed before walls, ceilings, tiles, and other finishes are closed or installed."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Finishes & Joinery",
          "text": "Flooring, painting, tiling, cabinetry, wardrobes, and other specified finishes are installed."
        },
        {
          "@type": "HowToStep",
          "position": 7,
          "name": "Final Inspection & Handover",
          "text": "The completed apartment is inspected, snagging items are addressed, and the project is handed over."
        }
      ]
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
            __html: JSON.stringify(apartmentRenovationSchema),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
