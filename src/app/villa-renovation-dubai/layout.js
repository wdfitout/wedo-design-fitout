import '../globals.css';

export const metadata = {
  title: "Villa Renovation Dubai | Full Villa Fit-Out | WE DO",
  description:
    "Full villa renovation in Dubai — MEP upgrades, layout refreshes & interior fit-out under one team. 400+ villas, 15+ years. Free itemized quote from WE DO.",
  keywords: [
  'Villa Interior Design Dubai',
  'Villa Construction in Dubai',
  'Villa Renovation in Dubai',
  'Luxury Villa Interior Projects UAE',
  'Villa interior Design Company in dubai',
  'villa design and build services in dubai',
  'We Do Villa Interior Projects',
  'Dubai Villa Interior Portfolio',
],
publisher: ['WEDO Interior Design and Fit out'],
    metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/villa-renovation-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 1. Service Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Villa Renovation Dubai",
              "serviceType": "Villa Renovation",
              "provider": {
                "@type": "LocalBusiness",
                "name": "WE DO Interior Design & Fit-Out",
                "url": "https://wedointerior.ae/"
              },
              "areaServed": [
                { "@type": "Place", "name": "Emirates Hills" },
                { "@type": "Place", "name": "Green Community" },
                { "@type": "Place", "name": "Palm Jumeirah" },
                { "@type": "Place", "name": "Dubai Hills" },
                { "@type": "Place", "name": "Jumeirah" },
                { "@type": "Place", "name": "Arabian Ranches" },
                { "@type": "City", "name": "Dubai" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Villa Renovation Services",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Demolition & Site Clearance"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "MEP Systems Renovation"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Kitchen Renovation"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Bathroom Renovation"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Majlis & Living Space Renovation"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Flooring, Ceiling & Waterproofing"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Smart Home & Automation"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Painting"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Exterior & Façade Renovation"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Swimming Pool Renovation"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Landscaping & Garden Design"}}
                ]
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {"@type": "Person", "name": "Sarah A."},
                  "reviewBody": "WE DO completely transformed our villa into a modern, elegant home while preserving the character we loved. From the renovation planning to the final finishes, every detail was handled professionally. The team kept us informed throughout the project, completed the work on schedule, and delivered exceptional quality. We couldn't be happier with the results.",
                  "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"}
                },
                {
                  "@type": "Review",
                  "author": {"@type": "Person", "name": "Ahmed K."},
                  "reviewBody": "Renovating our villa felt like a huge decision, but WE DO made the entire process smooth and stress-free. Their designers understood exactly what we wanted, and the craftsmanship exceeded our expectations. The finished home is brighter, more functional, and beautifully finished. We highly recommend them to anyone planning a villa renovation in Dubai.",
                  "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"}
                }
              ]
            })
          }}
        />

        {/* 2. FAQ Page Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does villa renovation cost in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Villa renovation cost in Dubai depends on villa size, scope of work, material grade, and community — larger villas, premium communities, and MEP- or layout-heavy projects generally sit at the higher end. WE DO provides a detailed, itemized quote after a free site visit, so you're working from real numbers rather than a lump-sum estimate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who is the best villa renovation company in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WE DO Interior Design & Fit-Out has completed 400+ villa renovations across Dubai over 15+ years, managing design, approvals, and construction under one DED-registered team. \"Best\" depends on your villa's scope, community, and budget — we recommend comparing project portfolios, approval-handling experience, and whether pricing is itemized by room before deciding, rather than choosing on price alone."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does a full villa renovation take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A full villa renovation in Dubai typically takes 3-4 months for standard-scope projects, extending to 6-8 months for large villas or extensive full-scope work like full MEP replacement. Partial renovations — a single kitchen or bathroom — usually complete in 3-6 weeks. NOC approvals and imported material lead times most often extend these timelines."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need a permit or NOC to renovate my villa in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It depends on the work. Moving walls, adding rooms, or altering the roofline requires a Dubai Municipality building permit and, in gated communities, a No Objection Certificate — but that's structural work, which sits outside WE DO's renovation scope and is coordinated separately through our villa construction team. Purely cosmetic and interior work like repainting, flooring, or MEP upgrades usually doesn't require a Dubai Municipality permit, though DEWA approval or a community NOC may still apply. WE DO manages the approvals relevant to your project as part of the process."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I live in my villa while it's being renovated?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In most cases, yes — renovations are typically phased so one section of the villa is worked on while you continue living in another. For extensive, whole-villa renovations involving major MEP work, a short-term move-out of a few weeks is more practical for dust, noise, and safety. We advise on this during your site visit."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's the difference between villa renovation and villa fit-out?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Villa renovation covers cosmetic and interior changes to an existing, lived-in villa — upgrading MEP systems, replacing finishes, refreshing layouts within the existing footprint. Villa fit-out typically refers to interior systems, joinery, and furnishing for a shell-and-core or newly handed-over space. Structural changes, like moving load-bearing walls or extending a villa's footprint, are handled separately through our villa construction team. Many projects combine renovation, fit-out, and structural work under one contract to avoid duplicated site visits."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's the difference between a cosmetic and a structural renovation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A cosmetic renovation updates surfaces and finishes — flooring, paint, cabinetry fronts — without changing the villa's layout, and usually needs no permit. Structural changes involve moving walls, relocating plumbing or electrical points, or extending the footprint, which requires Dubai Municipality approval and a licensed structural sign-off, and cost more and take longer. WE DO's renovation service covers the cosmetic side; structural work is handled through our villa construction team."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is it worth renovating an older villa in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Older villas (10-25+ years) often have outdated MEP systems, dated finishes, and layouts that no longer suit modern family life — renovating can address all three while avoiding the cost and disruption of relocating. Whether it's worth it depends on your villa's condition and how long you plan to stay; we assess this honestly during the initial consultation rather than upselling unnecessary work."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I book just one service, like pool renovation or smart home automation, without a full villa renovation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Pool renovation, landscaping, smart home automation, painting, and waterproofing can all be booked as standalone projects — they don't require a full villa renovation around them. The exception is anything that touches walls or MEP mid-build, like wiring for smart home features, which is easier to install while walls are already open, so it's worth flagging upfront if you might want it later."
                  }
                }
              ]
            })
          }}
        />

        {/* 3. HowTo Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "Steps Involved in Villa Renovation",
              "step": [
                { "@type": "HowToStep", "name": "Consultation & Site Visit", "text": "Assess the villa's condition, your goals, and community requirements." },
                { "@type": "HowToStep", "name": "Design & 3D Visualization", "text": "Layout options, material selection, and a full design brief before anything is finalized. Typically 4-8 weeks." },
                { "@type": "HowToStep", "name": "Approvals", "text": "DEWA approval for electrical and MEP changes, and community/developer NOC where applicable; a Dubai Municipality building permit only applies if structural work is separately commissioned through our construction team. Typically 4-8 weeks, often run alongside design." },
                { "@type": "HowToStep", "name": "Construction & MEP Works", "text": "Demolition, layout adjustments, plumbing and electrical rough-ins. Typically 4-16 weeks depending on scope." },
                { "@type": "HowToStep", "name": "Joinery, Finishes & Styling", "text": "Custom carpentry, flooring, painting, and final material installation. Typically 4-8 weeks." },
                { "@type": "HowToStep", "name": "Handover & Final Walkthrough", "text": "Quality inspection and walkthrough before you move back in." }
              ]
            })
          }}
        />

        {/* 4. BreadcrumbList Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://wedointerior.ae/" },
                { "@type": "ListItem", "position": 2, "name": "Villa Renovation Dubai", "item": "https://wedointerior.ae/villa-renovation-dubai/" }
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}