import '../globals.css';

export const metadata = {
  title: "Bluewaters Cafe Interior Design Dubai | We Do Interior",
  description:
    "bluewaters cafe interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/bluewaters-cafe-interior',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
