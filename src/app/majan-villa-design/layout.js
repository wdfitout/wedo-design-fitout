import '../globals.css';

export const metadata = {
  title: "Majan Villa Design Dubai| We Do Interior Design & Fit Out",
  description:
    "Majan Villa Design in Dubai. Our expertise will give your villa a luxury look. WEDO is offering complete Villa Interior Design Services.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/majan-villa-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
