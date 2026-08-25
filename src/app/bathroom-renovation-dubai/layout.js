import '../globals.css';

export const metadata = {
  title: "Bathroom Renovation Dubai | Cost & Waterproofing | WE DO",
  description:
    "Bathroom renovation in Dubai: waterproofing, tiling, vanity & plumbing under one fixed-price contract. DED-registered, 250+ projects.Call Now",
  keywords: [
    'Bathroom Renovation Dubai',
    'Bathroom Renovation Cost Dubai',
    'Bathroom Waterproofing Dubai',
    'Bathroom Renovation Company Dubai',
    'Walk-In Shower Conversion Dubai',
    'Bathroom Tiling Dubai',
    'Luxury Bathroom Renovation Dubai',
    'Bathroom Vanity Dubai',
  ],
  publisher: ['WEDO Interior Design and Fit out'],
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/bathroom-renovation-dubai',
  },
  openGraph: {
    title: "Bathroom Renovation Dubai | Cost & Waterproofing | WE DO",
    description:
      "Bathroom renovation in Dubai: waterproofing, tiling, vanity & plumbing under one fixed-price contract. DED-registered, 250+ projects.Call Now",
    url: 'https://wedointerior.ae/bathroom-renovation-dubai',
    // Use a real completed-project photo (before/after if available), never the logo
    images: [
      {
        url: '/images/bathroom-renovation-dubai.webp',
        width: 1200,
        height: 630,
        alt: 'Bathroom renovation project in Dubai by WE DO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bathroom Renovation Dubai | Cost & Waterproofing | WE DO",
    description:
      "Bathroom renovation in Dubai: waterproofing, tiling, vanity & plumbing under one fixed-price contract. DED-registered, 250+ projects.Call Now",
    images: ['/images/bathroom-renovation-dubai.webp'],
  },
};

// Priority order: FAQPage → LocalBusiness → BreadcrumbList → Service → HowTo
const bathroomRenovationSchema = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does bathroom renovation cost in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the tier more than the bathroom size. As a rough guide: a powder room refresh averages around AED 15,000–25,000, a standard full renovation roughly AED 30,000–50,000, a premium renovation approximately AED 50,000–85,000, and a luxury or layout-change project around AED 85,000–140,000+. We provide an itemized quote once we've assessed your space in person."
          }
        },
        {
          "@type": "Question",
          "name": "What's the most important part of a bathroom renovation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Waterproofing. A membrane applied to the floor and walls, tested before tiling begins, is what determines whether the renovation lasts 15 years or fails within months. In an apartment building, a failed membrane risks water damage to the unit below, not just your own bathroom."
          }
        },
        {
          "@type": "Question",
          "name": "Can I renovate a bathroom without moving the plumbing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, and it's usually faster and cheaper. If your shower, WC, and basin stay where they are, the work is stripping back, re-waterproofing, and rebuilding with new finishes. Moving plumbing adds cost because it touches drainage falls, not just the visible finish."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a bathroom renovation take in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Timelines scale with tier: roughly 7–10 working days for a powder room refresh, 10–14 for a standard full renovation, 18–25 for a premium renovation, and a confirmed timeline after site visit for luxury or layout-change projects, since those often involve longer lead times for imported stone or custom pieces."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need approval or an NOC to renovate my bathroom in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on scope. Fixture swaps usually only need building-management sign-off. Demolition, plumbing, or drainage changes typically need a developer NOC (including Emaar and Damac) or Trakhees approval in communities like Palm Jumeirah, plus Dubai Municipality technical guidelines for structural or waterproofing work."
          }
        },
        {
          "@type": "Question",
          "name": "Can you convert a bathtub into a walk-in shower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — this is one of the most common single requests we get. It includes drainage repositioning, waterproofing, tiling, and shower glass installation, usually priced within the Standard or Premium renovation tiers. We also handle the reverse — reinstating a bathtub — for owners preparing a unit for resale."
          }
        },
        {
          "@type": "Question",
          "name": "Where do I shower during a bathroom renovation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you have a second bathroom, we sequence the work so it stays usable throughout. For a single-bathroom home, plan for 1–2 weeks without access during the demolition-to-tiling phase, confirmed at BOQ stage."
          }
        },
        {
          "@type": "Question",
          "name": "What warranty do you offer on bathroom renovation work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every WE DO bathroom renovation includes a written workmanship warranty as part of your fixed-price contract, with the exact terms confirmed before work begins. We remain the single point of contact for any post-handover issues, including anything related to the waterproofing itself."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the best bathroom renovation company in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for DED registration, ISO certification, a fixed-price written contract, and a contractor who shows you the waterproofing before it's tiled over. WE DO Interior Design & Fit-Out meets all four, with 250+ completed projects and 15+ years in the Dubai market."
          }
        }
      ]
    },

    {
      "@type": "LocalBusiness",
      "name": "WE DO Interior Design & Fit-Out",
      "image": "https://wedointerior.ae/images/logo.svg",
      "telephone": "+971588075603",
      "email": "info@wedointerior.ae",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "WH-05 A, Jebel Ali Industrial 1",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "REPLACE_WITH_REAL_LAT",
        "longitude": "REPLACE_WITH_REAL_LONG"
      },
      "award": "Luxury Lifestyle Awards Winner 2026",
      "url": "https://wedointerior.ae/bathroom-renovation-dubai",
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
        { "@type": "ListItem", "position": 3, "name": "Bathroom Renovation Dubai", "item": "https://wedointerior.ae/bathroom-renovation-dubai" }
      ]
    },

    {
      "@type": "Service",
      "serviceType": "Bathroom Renovation",
      "name": "Bathroom Renovation Dubai",
      "provider": {
        "@type": "LocalBusiness",
        "name": "WE DO Interior Design & Fit-Out",
        "telephone": "+971588075603",
        "url": "https://wedointerior.ae/"
      },
      "areaServed": ["Business Bay", "DIFC", "Dubai Marina", "Palm Jumeirah", "Downtown Dubai", "Dubai Hills", "JLT", "Al Quoz"],
      "description": "Bathroom renovation in Dubai — demolition, waterproofing, tiling, custom vanities, plumbing, electrical, and sanitaryware under one fixed-price contract, priced per bathroom."
    },

    {
      "@type": "HowTo",
      "name": "How We Sequence the Work",
      "step": [
        { "@type": "HowToStep", "name": "Site Assessment & Measurement", "text": "We walk the space, check existing plumbing, drainage, and waterproofing conditions, and take full measurements." },
        { "@type": "HowToStep", "name": "Scope, Material Selection & Fixed-Price Proposal", "text": "You confirm layout and materials; we issue an itemized bill of quantities before work starts." },
        { "@type": "HowToStep", "name": "Stripping Back to the Structure", "text": "Full removal of existing tiles, fixtures, and fittings, site cleared and prepared." },
        { "@type": "HowToStep", "name": "Plumbing, Drainage & Waterproofing", "text": "Pipe and drainage changes happen first, then the waterproof membrane is applied and tested before tiling." },
        { "@type": "HowToStep", "name": "Tiling, Vanity & Fixture Installation", "text": "Wall and floor tiling, vanity, sanitaryware, and shower glass installed in sequence." },
        { "@type": "HowToStep", "name": "Final Inspection & Sign-Off", "text": "Full inspection against the agreed design before handover." }
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
            __html: JSON.stringify(bathroomRenovationSchema),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}