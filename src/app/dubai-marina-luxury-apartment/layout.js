import '../globals.css';

export const metadata = {
  title: "Dubai Marina Luxury Apartment Interior Design",
  description:
    "Transform your Dubai Marina luxury apartment with WE DO Fitout. Luxury interiors, modern layouts & bespoke finishes—contact us for refined living.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/dubai-marina-luxury-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
