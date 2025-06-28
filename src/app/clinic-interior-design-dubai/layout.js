import '../globals.css';

export const metadata = {
  title: "Clinic Design Dubai | We Do Interior",
  description:
    "Clinic interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/clinic-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
