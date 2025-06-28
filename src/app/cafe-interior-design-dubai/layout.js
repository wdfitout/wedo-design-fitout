import '../globals.css';

export const metadata = {
  title: "Cafe Interior Design Dubai | We Do Interior",
  description:
    "Cafe interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/cafe-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
