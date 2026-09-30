import '../globals.css';

export const metadata = {
  title: " Luxury Villa Interior Design in Dubai: Tips & Ideas | WE DO",
  description:
    "Explore tips for luxury villa interior design in Dubai, from elegant styles and layouts to materials, lighting and bespoke finishes.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/luxury-villa-interior-design-in-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
