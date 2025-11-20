import '../globals.css';

export const metadata = {
  title: " Tips For Luxury Villa Interior Design in Dubai",
  description:
    "Discover luxury villa interior design in Dubai with WE DO. From Al Manara to District 1, we provide custom design and turnkey fit-out services.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/luxury-villa-interior-design-in-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
