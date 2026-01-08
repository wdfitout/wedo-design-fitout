import '../globals.css';

export const metadata = {
  title: "Fountain Views Apartment Interior Design in Dubai",
  description:
    "Fountain views apartment interior design in Downtown Dubai. WE DO offers custom layouts, elegant finishes & smart planning for high-end living. Call Now!.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/fountain-views-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
