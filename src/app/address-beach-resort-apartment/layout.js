import '../globals.css';

export const metadata = {
  title: "Address Beach Resort, Dubai, Apartment Interior Design | We Do Interior",
  description:
    "Acacia, Dubai hills, 3 bedroom apartment interior design",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/address-beach-resort-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
