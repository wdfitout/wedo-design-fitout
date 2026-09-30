import '../globals.css';

export const metadata = {
  title: "Home Interior Design Dubai | WEDO Interior Design & Fit Out",
  description:
    "Luxury home interior design in Dubai by WEDO. 11+ years of experience, 250+ projects, ISO-certified teams, in-house designers and joinery factory. Call Now",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/home-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
