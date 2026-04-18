import '../globals.css';

export const metadata = {
  title: " High-End Living Room interior Design in Business Bay Dubai | WEDO",
  description:
    "Discover how to design a luxury living room interior  in Business Bay Dubai with modern interiors, elegant styles, smart layouts, and expert tips from WE DO.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/living-room-interior-business-bay',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
