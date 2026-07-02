import '../globals.css';
import Script from 'next/script';

export const metadata = {
  title: "Pagani-Inspired Furniture for Da Vinci Tower | WE DO Interior",
  description:
    "Pagani-inspired furniture for Da Vinci Tower, Business Bay — sofa, dining, bed sets from AED 500K vs AED 2-3M developer pricing. WE DO Interior.",
  keywords:
    "Da Vinci Tower furniture, Pagani inspired furniture Dubai, Da Vinci Tower Business Bay, Pagani Arte furniture alternative, luxury furniture Business Bay, Da Vinci Tower interior design, custom furniture Business Bay, Pagani furniture Dubai, Da Vinci Tower fit out, luxury apartment furniture Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/da-vinci-tower-pagani-furniture',
  },
  openGraph: {
    title: "Pagani-Inspired Furniture for Da Vinci Tower | WE DO Interior",
    description:
      "Pagani-inspired furniture for Da Vinci Tower, Business Bay — sofa, dining, bed sets from AED 500K vs AED 2-3M developer pricing. WE DO Interior.",
    url: 'https://wedointerior.ae/da-vinci-tower-pagani-furniture',
    siteName: 'WE DO Interior Design & Fit-Out',
    images: [
      {
        url: '/images/davinci-tower-pagani-inspired-furniture-living-room.webp',
        width: 1200,
        height: 630,
        alt: 'Pagani-inspired leather sofa and carbon fibre feature wall in Da Vinci Tower apartment, Business Bay',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pagani-Inspired Furniture for Da Vinci Tower | WE DO Interior",
    description:
      "Pagani-inspired furniture for Da Vinci Tower, Business Bay — sofa, dining, bed sets from AED 500K vs AED 2-3M developer pricing. WE DO Interior.",
    images: ['/images/davinci-tower-pagani-inspired-furniture-living-room.webp'],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to furnish an apartment in Da Vinci Tower by Pagani?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Through WE DO Interior, a full furniture package for a Da Vinci Tower unit starts around AED 500,000 for a 2-bedroom and scales up to AED 850,000 for larger 4-bedroom or duplex layouts, compared to AED 2-3 million for the developer's branded furniture package."
      }
    },
    {
      "@type": "Question",
      "name": "Is your furniture the same as official Pagani Arte furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — we are an independent fit-out company, not licensed by Pagani Automobili or DarGlobal. We source equivalent-grade leather, marble, and carbon-fibre-finish materials and replicate the design language and craftsmanship, without the Pagani brand licensing or nameplate."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do first after taking handover of my Da Vinci Tower apartment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Complete snagging before anything else — walk the unit and log any finishing issues before furniture moves in. Once snagging is cleared, confirm DEWA connection and building access approval, then start the furniture decision, since that typically takes 8-12 weeks from measurement to installation."
      }
    },
    {
      "@type": "Question",
      "name": "Should I furnish through the developer's package or independently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your goal. If a fully Pagani-branded nameplate matters for resale, the developer package holds that value. If you're furnishing to live in the unit or rent it out, the AED 1.4-2.4 million saving from independent furnishing is significant capital freed up elsewhere."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle snagging-related furniture adjustments after handover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We recommend furnishing only after snagging is resolved, and our team times delivery and installation around your building's access and loading bay schedule to avoid conflicts with any outstanding finishing work."
      }
    },
    {
      "@type": "Question",
      "name": "Who is the best interior design company for Da Vinci Tower and Business Bay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WE DO Interior Design & Fit-Out has completed 500+ residential and commercial fit-out projects across Dubai over 15+ years, rated 4.9 stars on Google, with an in-house joinery and upholstery workshop — one of the few companies able to recreate that premium material palette at scale without third-party contractor markups."
      }
    },
    {
      "@type": "Question",
      "name": "Do you furnish Da Vinci Tower units for owners living outside the UAE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We run a fully remote process — floor plan review, 3D render approval, material samples, and progress updates through installation — for international owners who won't be in Dubai during furnishing."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to furnish a Da Vinci Tower apartment after handover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A full apartment package typically takes 8-12 weeks from design approval to installation, once snagging is resolved — timed around Da Vinci Tower's specific building access and loading bay scheduling."
      }
    },
    {
      "@type": "Question",
      "name": "Can you match the exact sofa, dining, and bedroom sets shown in Da Vinci Tower marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We can design and build pieces that closely match the silhouette, materials, and finish shown in Da Vinci Tower's marketing imagery. We don't reproduce trademarked Pagani branding or badging, but the visual result is built to the same standard."
      }
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "WE DO Interior Design & Fit-Out",
  "image": "https://wedointerior.ae/images/hero-project-photo.jpg",
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
    "latitude": 24.9901875,
    "longitude": 55.1259375
  },
  "url": "https://wedointerior.ae",
  "priceRange": "AED",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "118"
  },
  "sameAs": [
    "https://maps.google.com/?cid=1335620002385386514"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wedointerior.ae/" },
    { "@type": "ListItem", "position": 2, "name": "Business Bay", "item": "https://wedointerior.ae/interior-design-company-business-bay" },
    { "@type": "ListItem", "position": 3, "name": "Da Vinci Tower Pagani-Inspired Furniture", "item": "https://wedointerior.ae/da-vinci-tower-pagani-furniture" }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Custom Furniture & Interior Fit-Out",
  "provider": {
    "@type": "LocalBusiness",
    "name": "WE DO Interior Design & Fit-Out"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Business Bay, Dubai"
  },
  "description": "Pagani-inspired custom furniture packages for Da Vinci Tower apartments in Business Bay, including sofas, dining sets, bedroom furniture, and joinery, delivered at a fraction of developer furniture-package pricing."
};

const remoteProcessSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Furnish a Da Vinci Tower Apartment Remotely",
  "step": [
    { "@type": "HowToStep", "name": "Floor plan review", "text": "Send your unit's floor plan so furniture placement can be mapped against the actual layout." },
    { "@type": "HowToStep", "name": "3D rendering approval", "text": "Approve a 3D render of each room before any material is cut." },
    { "@type": "HowToStep", "name": "Material samples", "text": "Receive leather, marble, and wood-finish samples digitally or shipped on request." },
    { "@type": "HowToStep", "name": "Production and installation", "text": "Production and installation proceed remotely, with progress photos and video updates at each stage." },
    { "@type": "HowToStep", "name": "Handover walkthrough", "text": "Receive a final video walkthrough before setting foot in the apartment." }
  ]
};

const moveInChecklistSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Da Vinci Tower Move-In Checklist",
  "step": [
    { "@type": "HowToStep", "name": "Snagging inspection", "text": "Walk the unit with a snagging list before signing off; furniture should go in only after finishing issues are resolved." },
    { "@type": "HowToStep", "name": "DEWA and utilities connection", "text": "Confirm utilities are active before any delivery is scheduled." },
    { "@type": "HowToStep", "name": "Building access approval", "text": "Secure an NOC or delivery permit from building management before large furniture moves through the loading bay." },
    { "@type": "HowToStep", "name": "Furniture decision", "text": "Decide between the developer package and independent furnishing." },
    { "@type": "HowToStep", "name": "Measurements confirmed", "text": "Confirm measurements against the actual unit, not just the sales brochure." },
    { "@type": "HowToStep", "name": "Installation and final walkthrough", "text": "Complete installation and a final walkthrough before move-in or tenant handover." }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <Script
          id="howto-remote-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(remoteProcessSchema) }}
        />
        <Script
          id="howto-checklist-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(moveInChecklistSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}