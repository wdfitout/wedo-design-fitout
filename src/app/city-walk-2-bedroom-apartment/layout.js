import '../globals.css';

export const metadata = {
  title: "City walk 2 bedroom apartment Interior Design Dubai",
  description:
    "Explore complete City walk 2 bedroom apartment interior design project in Dubai. See how our Residential Interior Design expertise transforms apartments.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/city-walk-2-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
