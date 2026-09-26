import '../globals.css';

const projectSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://wedointerior.ae/district-1-mbr-city-contemporary-villa#breadcrumb",
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
    "name": "Projects",
    "item": "https://wedointerior.ae/villa-projects"
  },
  {
    "@type": "ListItem",
    "position": 3,
    "name": "District One 2-Bedroom Contemporary Villa, MBR City",
    "item": "https://wedointerior.ae/district-1-mbr-city-contemporary-villa"
  }
      ]
    },
    {
      "@type": "CreativeWork",
      "@id": "https://wedointerior.ae/district-1-mbr-city-contemporary-villa#project",
      "name": "District One 2-Bedroom Contemporary Villa, MBR City",
      "description": "Contemporary 2-bedroom villa in District One, MBR City, designed by WE DO Interior Design & Fit-Out with warm minimalism, oak joinery, a double-height living room, glass staircase and garden-view home office.",
      "url": "https://wedointerior.ae/district-1-mbr-city-contemporary-villa",
      "image": [
        "https://wedointerior.ae/images/district-one-villa-double-height-living-glass-staircase.png",
        "https://wedointerior.ae/images/district-one-villa-home-office-green-wall.png",
        "https://wedointerior.ae/images/district-one-contemporary-villa-exterior-pool.png"
      ],
      "creator": {
        "@type": "Organization",
        "name": "WE DO Interior Design & Fit-Out",
        "url": "https://wedointerior.ae/"
      },
      "about": {
        "@type": "Service",
        "name": "Villa Interior Design in Dubai",
        "url": "https://wedointerior.ae/villa-interior-design-dubai"
      },
      "locationCreated": {
        "@type": "Place",
        "name": "District One, Mohammed Bin Rashid City, Dubai, UAE"
      }
    }
  ]
};

export const metadata = {
  title: "District One 2-Bedroom Contemporary Villa, MBR City | WE DO",
  description:
    "Contemporary 2-bedroom villa in District One, MBR City: double-height living room, glass staircase, oak joinery and a garden-view home office by WE DO.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/district-1-mbr-city-contemporary-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(projectSchema).replace(/</g, '\\u003c'),
          }}
        />

        {children}
      </body>
    </html>
  );
}