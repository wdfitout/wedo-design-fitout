import '../globals.css';

export const metadata = {
  title: "Central Park Towers, 2 Bedroom Apartment Interior Dubai",
  description:
    "Central park towers, 2 bedroom apartment interior design Dubai by We Do Interiors. Browse our project to see our apartment interior design services.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/central-park-towers-2-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
