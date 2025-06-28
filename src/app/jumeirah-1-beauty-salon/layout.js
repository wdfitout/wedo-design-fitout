import '../globals.css';

export const metadata = {
  title: "Jumeirah 1 Beauty Salon | We Do Interior Design & Fit Out",
  description:
    "Jumeirah 1 beauty salon interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/jumeirah-1-beauty-salon',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
