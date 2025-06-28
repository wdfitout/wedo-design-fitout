import '../globals.css';

export const metadata = {
  title: "Palm Jumeirah 6 Bedroom Penthouse | We Do Interior Design & Fit Out",
  description:
    "Palm jumeirah 6 bedroom penthouse interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/palm-jumeirah-6-bedroom-penthouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
