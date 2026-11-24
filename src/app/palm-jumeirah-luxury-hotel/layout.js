import '../globals.css';

export const metadata = {
  title: "Palm Jumeirah Luxury Hotel | WE DO Interior Fit Out Company in Dubai",
  description:
    "Palm Jumeirah Luxury Hotel fit out services in Dubai. WE DO, a top fit-out company in Dubai, delivers expert interior solutions. Call Now",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/palm-jumeirah-luxury-hotel',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
