import '../globals.css';

export const metadata = {
  title: "Kitchen Renovation Dubai - Cost, Layouts & Refacing - WEDO",
  description:
    "Kitchen renovation Dubai with in-house design, cabinetry & installation. Compare costs, layouts, refacing and full replacement options with WE DO",
  keywords: [
    'Kitchen Renovation Dubai',
    'Kitchen Remodeling Dubai',
    'Kitchen Refacing Dubai',
    'Modular Kitchen Dubai',
    'Kitchen Renovation Cost Dubai',
    'Kitchen Cabinets Dubai',
    'Open Kitchen Design Dubai',
    'Kitchen Renovation Company Dubai',
  ],
  publisher: ['WEDO Interior Design and Fit out'],
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/kitchen-renovation-dubai',
  },
  openGraph: {
    title: "Kitchen Renovation Dubai - Cost, Layouts & Refacing - WEDO",
    description:
      "Kitchen renovation Dubai with in-house design, cabinetry & installation. Compare costs, layouts, refacing and full replacement options with WE DO",
    url: 'https://wedointerior.ae/kitchen-renovation-dubai',
    // Use a real completed-project photo here, never a render or stock photo
    images: [
      {
        url: '/images/kitchen-renovation-dubai-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Kitchen renovation project in Dubai by WE DO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kitchen Renovation Dubai - Cost, Layouts & Refacing - WEDO",
    description:
      "Kitchen renovation Dubai with in-house design, cabinetry & installation. Compare costs, layouts, refacing and full replacement options with WE DO",
    images: ['/images/kitchen-renovation-dubai-og.jpg'],
  },
};

const kitchenRenovationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://wedointerior.ae/#business",
      "name": "WE DO Interior Design & Fit-Out",
      "url": "https://wedointerior.ae/",
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
      "@id": "https://wedointerior.ae/kitchen-renovation-dubai#webpage",
      "url": "https://wedointerior.ae/kitchen-renovation-dubai",
      "name": "Kitchen Renovation Dubai",
      "description": "Kitchen renovation Dubai with in-house design, cabinetry and installation. Compare costs, layouts, refacing and full replacement options with WE DO.",
      "isPartOf": {
        "@id": "https://wedointerior.ae/#website"
      },
      "about": {
        "@id": "https://wedointerior.ae/kitchen-renovation-dubai#service"
      },
      "publisher": {
        "@id": "https://wedointerior.ae/#business"
      },
      "breadcrumb": {
        "@id": "https://wedointerior.ae/kitchen-renovation-dubai#breadcrumb"
      },
      "inLanguage": "en-AE"
    },
    {
      "@type": "Service",
      "@id": "https://wedointerior.ae/kitchen-renovation-dubai#service",
      "name": "Kitchen Renovation Dubai",
      "serviceType": "Kitchen Renovation",
      "description": "Kitchen renovation services in Dubai including kitchen design, cabinetry, refacing, vinyl wrapping, full kitchen replacement, layout changes, electrical and plumbing coordination, countertops, backsplashes, lighting and installation.",
      "url": "https://wedointerior.ae/kitchen-renovation-dubai",
      "provider": {
        "@id": "https://wedointerior.ae/#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Dubai"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://wedointerior.ae/kitchen-renovation-dubai#breadcrumb",
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
          "name": "Kitchen Renovation Dubai",
          "item": "https://wedointerior.ae/kitchen-renovation-dubai"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://wedointerior.ae/kitchen-renovation-dubai#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much will remodeling your kitchen cost in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For a budget refresh, the approximate cost is AED 15,000-35,000. A mid-level kitchen remodel with cabinetry and countertops is approximately AED 40,000-80,000, while a complete custom kitchen remodel including layout changes is approximately AED 90,000-180,000. These are estimated market ranges, not fixed prices."
          }
        },
        {
          "@type": "Question",
          "name": "Which is the best kitchen remodeling company in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for a DED-licensed kitchen renovation company that provides a written fixed-price scope, shows actual completed projects, and offers design, cabinetry and installation under one contract. WE DO Interior Design & Fit-Out provides these services in Dubai."
          }
        },
        {
          "@type": "Question",
          "name": "Is it worth renovating the kitchen when planning to lease out an apartment in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be worthwhile when the kitchen is outdated or in poor condition. The level of renovation should match the expected rental market and property category, since an over-specified luxury kitchen may not provide a good return in a mid-market rental property."
          }
        },
        {
          "@type": "Question",
          "name": "What type of kitchen should I choose for my Dubai apartment: open or closed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on cooking habits, household size and the apartment layout. Closed kitchens provide better control of cooking smells and noise, while open kitchens can make smaller apartments feel more spacious and allow more natural light to reach the living area."
          }
        },
        {
          "@type": "Question",
          "name": "Should I choose kitchen refacing or remodeling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the cabinet boxes are structurally sound and the existing layout works, refacing can be suitable because it changes the visible parts without replacing the entire cabinetry. If the cabinets are water-damaged or the layout needs to change, a full kitchen replacement or remodel is more appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "What is the most common mistake during kitchen renovation in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "One common mistake is ordering cabinetry before verifying appliance dimensions and electrical requirements. Appliance specifications should be confirmed before finalizing cabinetry and electrical planning."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to remodel a kitchen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A basic kitchen refresh typically takes under 2 weeks. A full custom kitchen with a layout change typically takes around 4-6 weeks, although imported materials or additional approvals can extend the timeline."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need approval to renovate my kitchen in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cosmetic changes such as refacing may not require building approval, depending on the property. Changes involving walls, major electrical work or plumbing usually require building management approval or an NOC, and additional approvals may apply depending on the scope and property."
          }
        },
        {
          "@type": "Question",
          "name": "Can I convert my closed kitchen to an open layout?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A closed kitchen can potentially be converted to an open layout if the proposed changes are permitted and the wall is suitable for removal. Building management approval or an NOC and, where required, an engineering assessment should be obtained before structural work begins."
          }
        },
        {
          "@type": "Question",
          "name": "What is a modular kitchen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A modular kitchen is made from pre-engineered cabinet units that are manufactured and then assembled and installed on site. It can generally be quicker to install than a fully custom-built kitchen."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a dual show and working kitchen for my small apartment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually not. A dual show and working kitchen requires enough floor area for two functional kitchen zones. For a standard 1-3 bedroom apartment, one well-planned kitchen is generally more practical."
          }
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
            __html: JSON.stringify(kitchenRenovationSchema),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}