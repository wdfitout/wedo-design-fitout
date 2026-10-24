import '../globals.css';

export const metadata = {
  title: "Dubai Hills Luxury Villa Interior Design | WE DO Interior Design Dubai",
  description:
    "Dubai Hills Luxury Villa Interior Design | WE DO Interior Design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/dubai-hills-estate-luxury-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
