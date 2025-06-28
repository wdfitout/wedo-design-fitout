import '../globals.css';

export const metadata = {
  title: "Royal Atlantis 2 Bedroom Apartment | We Do Interior Design & Fit Out",
  description:
    "Royal atlantis 2 bedroom apartment interior design in Dubai",
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
