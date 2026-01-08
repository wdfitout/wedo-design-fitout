import '../globals.css';

export const metadata = {
  title: "Royal Atlantis 2 Bedroom Apartment Interior Design & Fit Out",
  description:
    "Royal Atlantis 2-bedroom apartment interior design in Dubai with bespoke fit-out & modern styles. Book your design today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/royal-atlantis-2-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
