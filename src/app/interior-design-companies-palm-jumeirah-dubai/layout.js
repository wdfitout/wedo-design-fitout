import '../globals.css';

export const metadata = {
  title: "Interior Design Companies in Palm Jumeirah, Dubai | WE DO",
  description:
    "Interior design & turnkey fit-out for Palm Jumeirah villas, apartments & penthouses. In-house joinery, 250+ Dubai projects. Book your free consultation.",
  keywords: [
    "interior design company Palm Jumeirah",
    "interior design companies in Palm Jumeirah",
    "villa interior design Palm Jumeirah",
    "apartment interior design Palm Jumeirah",
    "interior fit out company Palm Jumeirah",
    "turnkey fit out Palm Jumeirah",
    "commercial interior design Palm Jumeirah",
    "luxury interior design Dubai",
    "villa renovation Palm Jumeirah",
    "restaurant interior design Palm Jumeirah"
  ],
  metadataBase: new URL('https://wedointerior.ae/'),
  openGraph: {
    title: 'Interior Design Companies in Palm Jumeirah | WE DO Interior Design & Fit-Out',
    description:
      'Luxury interior design, villa renovation, and turnkey fit-out services in Palm Jumeirah by WE DO Interior. View our residential and commercial portfolio.',
    url: 'https://wedointerior.ae/interior-design-companies-palm-jumeirah-dubai',
    siteName: 'WE DO Interior Design & Fitout',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Palm Jumeirah Interior Design Project Banner',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Companies in Palm Jumeirah | WE DO Interior Design & Fit-Out',
    description:
      'Luxury interior design, villa renovation, and turnkey fit-out services in Palm Jumeirah by WE DO Interior.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/interior-design-companies-palm-jumeirah-dubai',
  },
   other: {
    publisher: "WE DO Interior Design & Fitout",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WE DO Interior Design & Fitout",
              "url": "https://wedointerior.ae/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://wedointerior.ae/logo-s-Black.png"
              },
              "sameAs": [
                "https://www.instagram.com/we.do.uae",
                "https://www.facebook.com/wedointerior"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971 058 807 5603",
                "contactType": "Customer Service",
                "areaServed": "AE",
                "availableLanguage": ["English", "Arabic"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "WH-05 A, Jebel Ali Industrial 1",
                "addressLocality": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              }
            })
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Interior Design Companies in Palm Jumeirah Dubai",
              "url": "https://wedointerior.ae/interior-design-companies-palm-jumeirah-dubai",
              "description": "Luxury residential and commercial interior design and turnkey fit-out services across Palm Jumeirah Dubai."
            })
          }}
        />

        {/* LocalBusiness Schema (Palm Jumeirah) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://wedointerior.ae/interior-design-companies-palm-jumeirah-dubai",
              "name": "WE DO Interior Design & Fit-Out",
              "image": "https://wedointerior.ae/og-image.jpg",
              "url": "https://wedointerior.ae/interior-design-companies-palm-jumeirah-dubai",
              "telephone": "+971 58 807 5603",
              "email": "info@wedointerior.ae",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "WH-05 A, Jebel Ali Industrial 1",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              },
              "areaServed": [
                "Palm Jumeirah",
                "Dubai Marina",
                "Downtown Dubai",
                "Dubai Hills Estate",
                "Emirates Hills"
              ],
              "serviceOffered": [
                {"@type": "Service","name": "Villa Interior Design in Palm Jumeirah"},
                {"@type": "Service","name": "Apartment Interior Design in Palm Jumeirah"},
                {"@type": "Service","name": "Penthouse Interior Design in Palm Jumeirah"},
                {"@type": "Service","name": "Restaurant Interior Design in Palm Jumeirah"}
              ]
            })
          }}
        />

        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who is the best interior design company in Palm Jumeirah?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WE DO Interior Design & Fit-Out has delivered 250+ residential and commercial projects across Dubai over 15+ years, including villas, apartments, and penthouses on Palm Jumeirah. Our in-house design, civil works, and joinery teams plus ISO 9001, 14001, and 45001 certification give clients one accountable team rather than several separate vendors."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does interior fit-out cost for a Palm Jumeirah villa or apartment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cost depends on unit size, scope (single room vs. full interior), and finish level a Signature Villa renovation and a two-bedroom apartment fit-out sit at very different budgets. Book a free consultation and we'll walk the space (in person or over video for overseas owners) and provide a tailored quote."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you handle DCD and Dubai Municipality approvals for Palm Jumeirah properties?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Our team manages DCD, Dubai Municipality, and private-developer approvals in-house, including for Emaar and Damac properties, so owners don't need a separate approvals consultant."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can WE DO manage a full villa renovation, or only new-build interiors?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Both. We handle full renovations of older Palm Jumeirah villas including structural and MEP changes as well as interior fit-out for newly handed-over villas and apartments."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you design for Palm Jumeirah apartments and penthouses, not just villas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Alongside villa work on the Fronds, we design and fit out apartments and penthouses in Crescent developments, including recently handed-over buildings like Serenia Living."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's included in your Palm Jumeirah interior fit-out service?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Design concept, 3D visualization and mood boards, civil and MEP coordination, custom joinery production, furniture and styling, and approvals handling all delivered by our in-house teams under a single contract."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does a Palm Jumeirah apartment or villa fit-out typically take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Timelines vary with scope a single-room refresh takes far less time than a full villa or penthouse fit-out. We confirm a project-specific timeline once we've scoped the unit."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you handle interior design remotely for overseas Palm Jumeirah property owners?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. With international buyers making up a large share of Palm Jumeirah purchases, we run design approval through 3D visualization and mood boards, so owners can sign off on their interior from abroad before any on-site work begins."
                  }
                }
              ]
            })
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
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
                  "name": "Interior Design Palm Jumeirah",
                  "item": "https://wedointerior.ae/interior-design-companies-palm-jumeirah-dubai"
                }
              ]
            })
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Interior Design & Fit-Out",
              "provider": {
                "@type": "LocalBusiness",
                "name": "WE DO Interior Design & Fit-Out"
              },
              "areaServed": "Palm Jumeirah, Dubai",
              "description": "Residential and commercial interior design, renovation, and turnkey fit-out for villas, apartments, penthouses, and commercial spaces on Palm Jumeirah."
            })
          }}
        />

        {/* HowTo Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "Our Palm Jumeirah Fit-Out Process",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Consultation & site visit",
                  "text": "In person for Dubai-based owners, over video call for owners still overseas."
                },
                {
                  "@type": "HowToStep",
                  "name": "Design concept, 3D visualization, mood boards & quote",
                  "text": "The design is reviewed and signed off before any on-site work starts."
                },
                {
                  "@type": "HowToStep",
                  "name": "Approvals, civil works & in-house joinery production",
                  "text": "DCD/DM/developer approvals, structural and MEP work, and joinery manufacturing run in parallel at our factory."
                },
                {
                  "@type": "HowToStep",
                  "name": "Installation, styling & handover",
                  "text": "Final fit, furniture placement, and a walkthrough before keys are handed back to the owner."
                }
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}