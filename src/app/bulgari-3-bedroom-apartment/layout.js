import '../globals.css';

export const metadata = {
  title: "Bulgari 3 Bedroom Apartment Design Dubai | We Do Interior",
  description:
    "bulgari 3 bedroom apartment interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/bulgari-3-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
