import '../globals.css';

export const metadata = {
  title: "Office Interior Design Dubai | We Do Interior Design & Fit Out",
  description:
    "Office interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/office-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
