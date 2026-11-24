import '../globals.css';

export const metadata = {
  title: "JBR Dubai Luxury Hotel | WE DO Interior Fit Out Company in Dubai",
  description:
    "JBR Dubai Luxury Hotel fit out services in Dubai. WE DO, a top fit-out company in Dubai, delivers expert interior solutions. Call Now",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/jbr-dubai-luxury-hotel',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
