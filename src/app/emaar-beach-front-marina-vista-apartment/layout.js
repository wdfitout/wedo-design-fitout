import '../globals.css';

export const metadata = {
  title: "Emaar Beach Front Marina Vista Apartment Interior Design Dubai",
  description:
    "Discover refined living with WE DO Interior. Our Emaar beach front marina vista apartment in Dubai our Best Interior Design & fitout services. Call Now!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/emaar-beach-front-marina-vista-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
