import '../globals.css';

export const metadata = {
  title: "Address Skyview, Dubai, 3 Bedroom Apartment interior design | We Do Interior",
  description:
    "Address Skyview, Dubai, 3 bedroom apartment interior design",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/address-skyview-3-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
