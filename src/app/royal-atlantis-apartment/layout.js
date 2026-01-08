import '../globals.css';

export const metadata = {
  title: "Royal Atlantis Apartment Interior Design in Dubai",
  description:
    "WE DO is offering Royal Atlantis Apartment interior design services in Dubai. This project blends luxury, fit-out, and bespoke furniture. Call Now!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/royal-atlantis-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
