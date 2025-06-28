import '../globals.css';

export const metadata = {
  title: "Dubai Marina Luxury Apartment | We Do Interior",
  description:
    "Dubai marina luxury apartment interior design",
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
