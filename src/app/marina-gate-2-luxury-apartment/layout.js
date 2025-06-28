import '../globals.css';

export const metadata = {
  title: "Marina Gate 2 Luxury Apartment | We Do Interior Design & Fit Out",
  description:
    "Marina gate 2 luxury apartment interior design Dubai",
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
