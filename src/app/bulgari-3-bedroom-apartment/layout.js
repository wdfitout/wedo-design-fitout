import '../globals.css';

export const metadata = {
  title: "Bulgari 3 Bedroom Apartment Design Dubai",
  description:
    "bulgari 3 bedroom apartment interior design Dubai by WE DO Interior & Fitout showcases luxury, elegance & expert apartment interior design in Dubai.",
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
