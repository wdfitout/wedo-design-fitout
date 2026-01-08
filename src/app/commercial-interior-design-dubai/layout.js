import '../globals.css';

export const metadata = {
  title: "Commercial Interior Design Dubai | We Do Interior",
  description:
    "Commercial interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/commercial-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
