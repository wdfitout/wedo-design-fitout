import '../globals.css';

export const metadata = {
  title: "Business Bay Business Hotel | WE DO Interior Fit Out Company in Dubai",
  description:
    "Business Bay Business Hotel fit out services in Dubai. WE DO, a top fit-out company in Dubai, delivers expert interior solutions. Call Now",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/business-bay-business-hotel',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
