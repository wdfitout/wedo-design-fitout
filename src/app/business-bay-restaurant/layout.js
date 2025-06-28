import '../globals.css';

export const metadata = {
  title: "Business Bay restaurant Design Dubai | We Do Interior",
  description:
    "Business bay restaurant interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/business-bay-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
