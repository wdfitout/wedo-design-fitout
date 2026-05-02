import '../globals.css';

export const metadata = {
  title: "Emaar Harbour Point Apartment Dubai Interior - WEDO",
  description:
    "Emaar Harbour Point Apartment Dubai interior design project in Creek Harbour. Contact WEDO to Discuss your project in Emaar properties.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/emaar-harbour-point-apartment-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
