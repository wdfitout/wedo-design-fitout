import '../globals.css';

export const metadata = {
  title: "Apartment Interior Design Dubai | WE DO Interior Design & Fit-Out",
  description:
    "Luxury apartment interior design and fit-out in Dubai by WE DO. Bespoke interiors, custom joinery, renovation and turnkey execution for premium residences.",
  metadataBase: new URL('https://wedointerior.ae/'),

  alternates: {
    canonical: '/apartment-interior-design-dubai',
  },

  openGraph: {
    title: "Apartment Interior Design Dubai | WE DO",
    description:
      "Luxury apartment interior design and fit-out in Dubai by WE DO. Bespoke interiors, custom joinery, renovation and turnkey execution for premium residences.",
    url: '/apartment-interior-design-dubai',
    siteName: 'WE DO Interior Design & Fit-Out',
    type: 'website',
    images: [
      {
        url: '/images/dubai-interior-design-companies-apartment-sitting-area.webp',
        width: 1200,
        height: 630,
        alt: 'Luxury apartment interior design in Dubai by WE DO',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Apartment Interior Design Dubai | WE DO",
    description:
      "Luxury apartment interior design and fit-out in Dubai by WE DO. Bespoke interiors, custom joinery, renovation and turnkey execution for premium residences.",
    images: [
      '/images/dubai-interior-design-companies-apartment-sitting-area.webp',
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}