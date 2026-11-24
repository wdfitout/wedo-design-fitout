import '../globals.css';

export const metadata = {
  title: "DIFC Boutique Hotel | WE DO Interior Fit Out Company in Dubai",
  description:
    "DIFC Boutique Hotel fit out services in Dubai. WE DO, a top fit-out company in Dubai, delivers expert interior solutions. Call Now",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/difc-boutique-hotel',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
