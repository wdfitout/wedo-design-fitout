import '../globals.css';

export const metadata = {
  title: " How to Design Apartment in Dubai Creek Harbour | WE DO Interior",
  description:
    "Explore the art of designing your dream apartment in Dubai Creek Harbour via WE DO Interior. Explore luxurious apartment interior designs in Dubai.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/creek-harbour-apartment-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
