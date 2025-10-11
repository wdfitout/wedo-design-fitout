import '../globals.css';

export const metadata = {
  title: "Umm Suqeim Boutique Interior Design & Fit Out",
  description:
    "We at WEDO, specialise in retail interior design for clients and businesses. This Umm Suqeim Boutique Interior Design showacases our skills. Contact Us.",
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
