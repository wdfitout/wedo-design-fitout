import '../globals.css';

export const metadata = {
  title: "Boutique Interior Design Dubai | We Do Interior",
  description:
    "boutique interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/boutique-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
