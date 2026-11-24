import '../globals.css';

export const metadata = {
  title: "Downtown Dubai Five Star Hotel | WE DO Interior Fit Out Company in Dubai",
  description:
    "Downtown Dubai Five Star Hotel fit out services in Dubai. WE DO, a top fit-out company in Dubai, delivers expert interior solutions. Call Now",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/downtown-dubai-five-star-hotel',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
