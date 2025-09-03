import '../globals.css';

export const metadata = {
  title: "Boutique Interior Design Dubai - Retail Interior Design",
  description:
    "Luxury Boutique interior design in Dubai by WE DO. Modern, classic, or creative styles, beautiful spaces made for you. Call now to start your project!",
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
