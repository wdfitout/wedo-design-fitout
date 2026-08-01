import '../globals.css';

export const metadata = {
  title: "Luxury Jumeirah Villa Interior Design, Dubai | WE DO",
  description:
    "Villa interior design across Jumeirah, Dubai — established and new-build homes. ISO-certified, one-roof team, 15+ years. Book a walkthrough today.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/villa-interior-design-jumeirah-dubai',
  },
  keywords: [
    "villa interior design jumeirah dubai",
    "luxury villa design jumeirah",
    "villa fit out company dubai",
    "villa interior designer jumeirah",
    "we do interior design dubai",
    "luxury villa renovation jumeirah",
    "custom villa interior fit out dubai",
    "residential interior design jumeirah",
    "villa space planning dubai",
    "premium villa fit out jumeirah"
  ],
  other: {
    publisher: "WE DO Interior Design & Fitout",
  }
};

export default function Layout({ children }) {
  // Aapka diya hua exact FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does villa interior design cost in Jumeirah?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Villa interior design costs in Jumeirah vary based on spatial scope, custom joinery, material finishes, and structural fit-out requirements. Contact WE DO for a tailored estimate."
        }
      }
    ]
  };

  // Aapka diya hua exact HowTo Schema (6 Steps Process)
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Our Villa Interior Design Process",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Discovery & Site Walkthrough",
        "text": "Initial site walkthrough, spatial assessment, and understanding client design preferences."
      },
      {
        "@type": "HowToStep",
        "name": "Concept Design & Layout Planning",
        "text": "Developing initial 2D floor plans, spatial zoning, and interior mood boards."
      },
      {
        "@type": "HowToStep",
        "name": "3D Visualisation & Material Selection",
        "text": "Detailed photorealistic 3D renders displaying custom joinery, lighting, and luxury finishes."
      },
      {
        "@type": "HowToStep",
        "name": "Approvals & Permitting",
        "text": "Securing necessary developer NOCs and authority approvals for villa fit-out works."
      },
      {
        "@type": "HowToStep",
        "name": "Custom Joinery & Fit-Out Execution",
        "text": "In-house fabrication of custom joinery and complete turnkey fit-out execution on site."
      },
      {
        "@type": "HowToStep",
        "name": "Final Inspection & Quality Handover",
        "text": "Complete snagging check, furniture placement, cleanup, and project handover."
      }
    ]
  };

  return (
    <>
      {/* Structured Data (Schema) Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {children}
    </>
  );
}