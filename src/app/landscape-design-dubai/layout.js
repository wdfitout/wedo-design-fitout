import '../globals.css';

export const metadata = {
  title: "Landscape Design Dubai | We Do Interior Design & Fit Out",
  description:
    "Landscape design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/landscape-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
