import '../globals.css';

export const metadata = {
  title: "Villa Interior Design Dubai | WE DO Interior Design & Fit-Out",
  description:
    "Luxury villa interior design and fit-out in Dubai by WE DO. Bespoke concepts, custom joinery, renovation and turnkey execution for premium villas.",

  metadataBase: new URL('https://wedointerior.ae/'),

  alternates: {
    canonical: '/villa-interior-design-dubai',
  },

  openGraph: {
    title: "Villa Interior Design Dubai | WE DO",
    description:
      "Luxury villa interior design and fit-out in Dubai by WE DO. Bespoke concepts, custom joinery, renovation and turnkey execution for premium villas.",
    url: '/villa-interior-design-dubai',
    siteName: 'WE DO Interior Design & Fit-Out',
    type: 'website',
    images: [
      {
        url: '/images/luxury-villa-interior-design-dubai.webp',
        width: 1200,
        height: 630,
        alt: 'Luxury villa interior design in Dubai by WE DO',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Villa Interior Design Dubai | WE DO",
    description:
      "Luxury villa interior design and fit-out in Dubai by WE DO. Bespoke concepts, custom joinery, renovation and turnkey execution for premium villas.",
    images: [
      '/images/luxury-villa-interior-design-dubai.webp',
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