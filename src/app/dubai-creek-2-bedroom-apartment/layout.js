import '../globals.css';

export const metadata = {
  title: "Dubai Creek 2 Bedroom Apartment Interior",
  description:
    "Discover our stunning Dubai Creek 2 Bedroom Apartment interior design, blending luxury & comfort. Explore bespoke living – view our project today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/dubai-creek-2-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
