import '../globals.css';

export const metadata = {
  title: "Business Bay Cafe interior Design Dubai | We Do Interior",
  description:
    "Business bay cafe interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/business-bay-cafe-interior',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
