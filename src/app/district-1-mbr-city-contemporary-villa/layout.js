import '../globals.css';

export const metadata = {
  title: "District 1 MBR City Contemporary Villa Interior",
  description:
    "Transform your DISTRICT 1 MBR CITY CONTEMPORARY VILLA with WE DO Interior Design & Fitout. Experience luxury living—contact us today for bespoke interiors.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/district-1-mbr-city-contemporary-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
