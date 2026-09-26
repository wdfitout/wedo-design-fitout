import '../globals.css';

const projectSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://wedointerior.ae/district-one-contemporary-villa#breadcrumb",
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
          "name": "District One 3-Bedroom Contemporary Villa, MBR City",
          "item": "https://wedointerior.ae/district-one-contemporary-villa"
        }
      ]
    },
    {
      "@type": "CreativeWork",
      "@id": "https://wedointerior.ae/district-one-contemporary-villa#project",
      "name": "District One 3-Bedroom Contemporary Villa, MBR City",
      "description": "Contemporary 3-bedroom villa in District One, MBR City, designed and delivered by WE DO Interior Design & Fit-Out with dark walnut joinery, honed travertine, a double-height living room, a contemporary majlis and a travertine master bathroom.",
      "url": "https://wedointerior.ae/district-one-contemporary-villa",
      "image": [
        "https://wedointerior.ae/images/district-one-3-bedroom-contemporary-villa-living-room.webp",
        "https://wedointerior.ae/images/district-one-3-bedroom-contemporary-villa-majlis.webp",
        "https://wedointerior.ae/images/district-one-3-bedroom-contemporary-villa-exterior.webp"
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

const TITLE = "District One 3-Bedroom Contemporary Villa, MBR City | WE DO";
const DESCRIPTION =
  "Contemporary 3-bedroom villa in District One, MBR City: walnut joinery, travertine walls, a double-height living room and a contemporary majlis by WE DO.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/district-one-contemporary-villa',
  },
  // Without this block the page inherits the homepage's social tags
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/district-one-contemporary-villa',
    siteName: 'WE DO Interior Design & Fit-Out',
    images: [
      {
        url: '/images/district-one-3-bedroom-contemporary-villa-exterior.webp',
        width: 1200,
        height: 630,
        alt: 'Contemporary District One villa exterior with travertine facade and pool, MBR City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/district-one-3-bedroom-contemporary-villa-exterior.webp'],
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