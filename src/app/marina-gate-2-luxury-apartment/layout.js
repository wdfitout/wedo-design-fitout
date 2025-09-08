import '../globals.css';

export const metadata = {
  title: "Marina Gate 2 Luxury Apartment Interior Design Dubai Marina",
  description:
    "Experience luxury at Marina Gate 2 Luxury Apartment Interior Design in Dubai Marina.Contact WE DO Fitout to transform your apartment with style.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/marina-gate-2-luxury-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
