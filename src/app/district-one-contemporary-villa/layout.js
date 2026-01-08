import '../globals.css';

export const metadata = {
  title: "District One Contemporary Villa Interior Design in MBR City",
  description:
    "District One Contemporary Villa Interior Design, MBR. Discover our villa design in Dubai. WE DO creates timeless luxury interiors. Contact us today.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/district-one-contemporary-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
