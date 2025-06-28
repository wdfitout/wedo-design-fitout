import '../globals.css';

export const metadata = {
  title: "Palm Jumeirah Barber Shop | We Do Interior Design & Fit Out",
  description:
    "Palm jumeirah barber shop interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/palm-jumeirah-barber-shop',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
