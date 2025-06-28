import '../globals.css';

export const metadata = {
  title: "District 1 MBR City Contemporary Villa | We Do Interior",
  description:
    "District 1 mbr city contemporary villa interior design Dubai",
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
