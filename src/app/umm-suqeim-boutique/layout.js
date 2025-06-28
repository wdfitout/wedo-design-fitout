import '../globals.css';

export const metadata = {
  title: "Umm Suqeim Boutique | We Do Interior Design & Fit Out",
  description:
    "Umm suqeim boutique interior design, Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/umm-suqeim-boutique',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
