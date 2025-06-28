import '../globals.css';

export const metadata = {
  title: "Beauty Salon Interior Design Dubai | We Do Interior",
  description:
    "beauty salon interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/beauty-salon-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
