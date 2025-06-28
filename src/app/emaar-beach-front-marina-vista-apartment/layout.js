import '../globals.css';

export const metadata = {
  title: "Emaar Beach Front Marina Vista Apartment | We Do Interior",
  description:
    "emaar beach front marina vista apartment interior design Dubai",
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
