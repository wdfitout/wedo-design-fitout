import '../globals.css';

export const metadata = {
  title: "Palm Jumeirah F&B | We Do Interior Design & Fit Out",
  description:
    "Palm jumeirah food and beverage interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/palm-jumeirah-f&b',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
