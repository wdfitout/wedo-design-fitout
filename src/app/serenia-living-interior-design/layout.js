import '../globals.css';
import Script from 'next/script';

export const metadata = {
  title: "Serenia Living Interior Design & Fit-Out | WE DO Interior",
  description:
    "Full interior design, custom furniture, and in-house joinery fit-out for Serenia Living, Palm Jumeirah, one team, design to installation. Get a quote.",
  keywords:
    "Serenia Living interior design, Palm Jumeirah fit out, Serenia Living custom furniture, luxury penthouse interior Dubai, Sky Mansion interior design, WE DO Interior",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/serenia-living-interior-design',
  },
  other: {
    publisher: "WE DO Interior Design & Fitout",
  },
  openGraph: {
    title: "Serenia Living Interior Design & Fit-Out | WE DO Interior",
    description:
      "Full interior design, custom furniture, and in-house joinery fit-out for Serenia Living, Palm Jumeirah, one team, design to installation. Get a quote.",
    url: 'https://wedointerior.ae/serenia-living-interior-design',
    siteName: 'WE DO Interior Design & Fit-Out',
    images: [
      {
        url: '/images/serenia-living-interior-design-living-room-we-do.webp',
        width: 1200,
        height: 630,
        alt: 'Custom interior design and furniture in a Serenia Living apartment, Palm Jumeirah, by WE DO Interior',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Serenia Living Interior Design & Fit-Out | WE DO Interior",
    description:
      "Full interior design, custom furniture, and in-house joinery fit-out for Serenia Living, Palm Jumeirah, one team, design to installation. Get a quote.",
    images: ['/images/serenia-living-interior-design-living-room-we-do.webp'],
  },
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://wedointerior.ae/serenia-living-interior-design/#webpage",
  "url": "https://wedointerior.ae/serenia-living-interior-design",
  "name": "Serenia Living Interior Design & Fit-Out | WE DO Interior",
  "description": "Full interior design, custom furniture, and in-house joinery fit-out for Serenia Living, Palm Jumeirah — one team, design to installation. Get a quote.",
  "isPartOf": { "@id": "https://wedointerior.ae/#website" },
  "about": { "@id": "https://wedointerior.ae/#organization" },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://wedointerior.ae/images/serenia-living-interior-design-hero.jpg"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is the best interior design company near Serenia Living, Palm Jumeirah?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WE DO Interior Design & Fit-Out is a Dubai-based interior design and fit-out company with 15+ years of experience and 250+ completed projects, including work in Business Bay and across Palm Jumeirah. WE DO handles design, custom joinery, furniture, and installation in-house — a single team and contract for Serenia Living owners, rather than coordinating separate designers and contractors."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in a Serenia Living interior fit-out service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A full WE DO fit-out covers design concept and 3D visualization, material and furniture selection, custom joinery manufactured in-house, on-site installation, and final styling. The scope is agreed and quoted before work begins, under a single contract."
      }
    },
    {
      "@type": "Question",
      "name": "How much does interior fit-out cost for a Serenia Living apartment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cost depends on unit size, scope of work, and material and furniture selections, so WE DO provides a fixed quote after an initial consultation rather than a flat rate. Contact WE DO for a project-specific quote."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a Serenia Living apartment interior fit-out take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Comparable Dubai apartment fit-outs typically run 8-16 weeks from design to installation, depending on unit size and scope, and custom joinery adds manufacturing time versus off-the-shelf furniture. WE DO confirms a project-specific timeline at the design sign-off stage."
      }
    },
    {
      "@type": "Question",
      "name": "Can I customize my Serenia Living apartment after handover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Developer handover finishes cover the shell but not furniture or custom joinery outside The Reserve. WE DO designs and fits out apartments after handover, working around any developer snagging still in progress."
      }
    },
    {
      "@type": "Question",
      "name": "Can WE DO manage my Serenia Living interior design if I live abroad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. WE DO runs remote-friendly projects for Dubai owners based abroad, using video consultations, 3D visualization for design sign-off, and progress updates through installation."
      }
    },
    {
      "@type": "Question",
      "name": "What interior design style suits a Serenia Living Sky Mansion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sky Mansions have double-height ceilings around 8.5m, 18,500-25,000 sq ft of floor area, and private pools, which suit fewer, larger-scale design gestures — feature walls, statement lighting, and open sightlines toward the sea. WE DO develops a bespoke concept per Sky Mansion rather than one fixed style."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a separate joinery company, or does one company handle everything?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. WE DO's design, joinery, and fit-out teams work under one company and one contract, with all joinery manufactured at WE DO's own factory rather than outsourced."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a fit-out quote for my Serenia Living unit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contact WE DO with your unit type, approximate size, and current stage. WE DO reviews the brief, may request a site visit or floor plan, and returns a fixed quote covering design, joinery, furniture, and installation."
      }
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "WE DO Interior Design & Fit-Out",
  "image": "https://wedointerior.ae/images/serenia-living-interior-design-hero.jpg",
  "telephone": "+971588075603",
  "email": "info@wedointerior.ae",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "WH-05 A, Jebel Ali Industrial 1",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "url": "https://wedointerior.ae",
  "priceRange": "AED",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "118"
  },
  "sameAs": ["https://maps.google.com/?cid=1335620002385386514"]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wedointerior.ae/" },
    { "@type": "ListItem", "position": 2, "name": "Palm Jumeirah", "item": "https://wedointerior.ae/interior-design-companies-palm-jumeirah-dubai" },
    { "@type": "ListItem", "position": 3, "name": "Serenia Living Interior Design", "item": "https://wedointerior.ae/serenia-living-interior-design" }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Interior Design and Fit-Out",
  "provider": {
    "@type": "LocalBusiness",
    "name": "WE DO Interior Design & Fit-Out"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Serenia Living, Palm Jumeirah, Dubai"
  },
  "description": "Interior design, custom furniture, and in-house joinery fit-out for apartment, penthouse, Reserve, and Sky Mansion owners at Serenia Living, Palm Jumeirah, delivered under a single contract from design through installation."
};

const fitoutProcessSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "WE DO's Interior Design & Fit-Out Process for Serenia Living",
  "step": [
    { "@type": "HowToStep", "name": "Consultation & unit assessment", "text": "WE DO reviews the residence's layout, handover condition, and any outstanding snagging, and opens the Building Management NOC application with Serenia Living's facilities team." },
    { "@type": "HowToStep", "name": "Design concept & 3D visualization", "text": "Mood boards, a material palette, and 3D renders are developed and approved by the owner, typically over one to two weeks." },
    { "@type": "HowToStep", "name": "Material & furniture selection", "text": "Finishes, materials, and furniture are finalized against the approved concept; imported pieces are ordered early to cover their own shipping lead time." },
    { "@type": "HowToStep", "name": "Joinery manufacturing", "text": "Custom wardrobes, kitchen units, and cabinetry are built at WE DO's in-house factory to the unit's exact measurements." },
    { "@type": "HowToStep", "name": "Fit-out & installation", "text": "On-site work begins once the Building Management NOC is approved, with service elevator and delivery windows booked around Serenia Living's access rules." },
    { "@type": "HowToStep", "name": "Styling & handover", "text": "Final furniture placement, a styling pass, a quality check, and a walkthrough with the owner close out the project." }
  ]
};

const moveInChecklistSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Serenia Living Move-In & Fit-Out Checklist",
  "step": [
    { "@type": "HowToStep", "name": "Complete developer snagging", "text": "Log and resolve finishing issues before furniture moves in." },
    { "@type": "HowToStep", "name": "Confirm DEWA connection", "text": "Utilities should be active before any delivery is scheduled." },
    { "@type": "HowToStep", "name": "Secure Building Management NOC", "text": "Required before fit-out work or large deliveries can begin." },
    { "@type": "HowToStep", "name": "Decide your scope", "text": "Full fit-out for a standard residence, or personalization on top of The Reserve's included furniture." },
    { "@type": "HowToStep", "name": "Confirm on-site measurements", "text": "Actual unit dimensions, not just the floor plan, before joinery is ordered." },
    { "@type": "HowToStep", "name": "Book installation and final walkthrough", "text": "Scheduled around Serenia Living's service elevator and access windows." }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="webpage-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        />
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
          id="howto-process-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(fitoutProcessSchema) }}
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