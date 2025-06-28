import '../globals.css';

export const metadata = {
  title: "District One Contemporary Villa | We Do Interior",
  description:
    "District one contemporary villa interior design Dubai",
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
