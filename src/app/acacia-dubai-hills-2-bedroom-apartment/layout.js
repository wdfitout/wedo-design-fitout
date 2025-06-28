import '../globals.css';

export const metadata = {
  title: "Acacia, Dubai hills, 2 bedroom apartment interior design | We Do Interior",
  description:
    "Acacia, Dubai hills, 3 bedroom apartment interior design",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/acacia-dubai-hills-2-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
