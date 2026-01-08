import '../globals.css';

export const metadata = {
  title: "Jumeirah Beach Residence Villa | We Do Interior Design & Fit Out",
  description:
    "Jumeirah beach residence villa interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/jumeirah-beach-residence-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
