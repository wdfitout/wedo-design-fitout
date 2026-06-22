import '../globals.css';

export const metadata = {
  title: "Boutique Interior Design in Dubai | WE DO Interior Design & Fitout",
  description:
    "WE DO designs premium boutique interiors in Dubai, fashion stores, concept shops & lifestyle brands. Trusted boutique fitout specialists.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/boutique-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
