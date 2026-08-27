import '../globals.css';

export const metadata = {
  title: "Retail Renovation in Dubai | Shop & Store Remodeling | WE DO",
  description:
    "Retail renovation in Dubai: Shopfront, joinery, MEP under one contract. DED-registered, 250+ projects. Get in touch to start.",
  keywords: [
    'Retail Renovation Dubai',
    'Shop Renovation Dubai',
    'Store Remodeling Dubai',
    'Retail Fit Out Dubai',
    'Shopfront Renovation Dubai',
    'Mall Unit Renovation Dubai',
    'Retail Renovation Cost Dubai',
    'Retail Joinery Dubai',
  ],
  publisher: ['WEDO Interior Design and Fit out'],
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/retail-renovation-dubai',
  },
  openGraph: {
    title: "Retail Renovation in Dubai | Shop & Store Remodeling | WE DO",
    description:
      "Retail renovation in Dubai: Shopfront, joinery, MEP under one contract. DED-registered, 250+ projects. Get in touch to start.",
    url: 'https://wedointerior.ae/retail-renovation-dubai',
    // Use a real completed-project photo (before/after if available), never the logo
    images: [
      {
        url: '/images/retail-renovation-dubai.webp',
        width: 1200,
        height: 630,
        alt: 'Retail renovation project in Dubai by WE DO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Retail Renovation in Dubai | Shop & Store Remodeling | WE DO",
    description:
      "Retail renovation in Dubai: Shopfront, joinery, MEP under one contract. DED-registered, 250+ projects. Get in touch to start.",
    images: ['/images/retail-renovation-dubai.webp'],
  },
};

// Priority order: FAQPage → LocalBusiness → BreadcrumbList → Service → HowTo
const retailRenovationSchema = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does retail renovation cost in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on scope and location type. As a rough guide, a cosmetic refresh averages around AED 100–250 per sq ft, a standard renovation roughly AED 250–450, and a full renovation with MEP approximately AED 450–800+. Mall units typically add 15–25% on top for guide-compliant materials and NOC costs."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between retail renovation and retail fit-out?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Renovation works within your existing shop — new flooring, joinery, and MEP — without touching the unit's core structure. Fit-out is more extensive, usually starting from a bare shell. If your shop is trading but looks dated, renovation is the faster, lower-cost route."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need mall approval to renovate a shop inside a shopping centre?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Major malls operate under their own fit-out guide covering approved materials, ceiling heights, and signage rules, plus a mall NOC process that can add 4–8 weeks before construction starts. Street-facing shops answer to Dubai Municipality and DCD directly."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a retail renovation take in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically 2–4 weeks for a cosmetic refresh, 4–8 for a standard renovation, and 8–14 for a full renovation with MEP. Mall units should add 4–8 weeks on top for the NOC process specifically."
          }
        },
        {
          "@type": "Question",
          "name": "Can I keep my shop open during renovation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In most cases, yes. Joinery and material sourcing happen offsite in parallel with approvals, and disruptive on-site work is scheduled around your trading hours wherever the space allows. Full closure is usually only needed for a major layout change."
          }
        },
        {
          "@type": "Question",
          "name": "What's the biggest cost driver in a retail renovation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Custom joinery — display units, counters, and shopfront fixtures built to your brand's exact specification — can run close to 40% of total budget on higher-end projects. It's the line item most owners underestimate at quotation stage."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need separate approval for shopfront signage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often yes — signage and facade approval is frequently handled separately from the general renovation NOC, both for mall units and standalone shops. We coordinate this as part of the same project."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in a retail renovation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A typical retail renovation covers shopfront, flooring, joinery and display units, lighting, and signage, plus MEP upgrades where required. It doesn't include structural changes to the building or a full reconfiguration from bare shell, which falls under a retail fit-out instead."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the best retail renovation company in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for DED registration, ISO certification, a fixed-price written contract, and in-house joinery capability specifically. WE DO Interior Design & Fit-Out meets all four, with 250+ completed projects and 15+ years in the Dubai market."
          }
        }
      ]
    },

    {
      "@type": "LocalBusiness",
      "name": "WE DO Interior Design & Fit-Out",
      "telephone": "+971588075603",
      "email": "info@wedointerior.ae",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "WH-05 A, Jebel Ali Industrial 1",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "areaServed": ["Business Bay", "Downtown Dubai", "Dubai Marina", "JBR", "DIFC", "Deira", "Al Quoz", "Jumeirah"],
      "award": "Luxury Lifestyle Awards Winner 2026",
      "url": "https://wedointerior.ae/retail-renovation-dubai",
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
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wedointerior.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://wedointerior.ae/services" },
        { "@type": "ListItem", "position": 3, "name": "Retail Renovation Dubai", "item": "https://wedointerior.ae/retail-renovation-dubai" }
      ]
    },

    {
      "@type": "Service",
      "serviceType": "Retail Renovation",
      "name": "Retail Renovation Dubai",
      "provider": {
        "@type": "LocalBusiness",
        "name": "WE DO Interior Design & Fit-Out",
        "telephone": "+971588075603",
        "url": "https://wedointerior.ae/"
      },
      "areaServed": ["Business Bay", "Downtown Dubai", "Dubai Marina", "JBR", "DIFC", "Deira", "Al Quoz", "Jumeirah"],
      "description": "Retail store renovation in Dubai — shopfront, joinery, flooring, lighting, and MEP under one fixed-price contract, covering both mall units and street-facing shops."
    },

    {
      "@type": "HowTo",
      "name": "Our Retail Renovation Process",
      "step": [
        { "@type": "HowToStep", "name": "Site Assessment", "text": "We walk the space, note what's staying and what's changing, and flag whether you're dealing with a mall unit or a standalone shop." },
        { "@type": "HowToStep", "name": "Scope, Design & Fixed-Price Proposal", "text": "A design concept and a full itemized bill of quantities, including joinery, before anything is ordered." },
        { "@type": "HowToStep", "name": "Approvals", "text": "Dubai Municipality and DCD for standalone units; the relevant mall fit-out NOC for units inside a shopping centre." },
        { "@type": "HowToStep", "name": "Joinery & Fabrication", "text": "Display units, counters, and shopfront joinery built offsite through our own joinery factory." },
        { "@type": "HowToStep", "name": "Phased Construction", "text": "Shopfront, flooring, MEP, and fit-out carried out in sequence, scheduled around trading hours where possible." },
        { "@type": "HowToStep", "name": "Snagging & Handover", "text": "Full inspection against the agreed design before handover documentation is issued." }
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
            __html: JSON.stringify(retailRenovationSchema),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}