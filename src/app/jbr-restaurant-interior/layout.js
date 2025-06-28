import '../globals.css';

export const metadata = {
  title: "JBR Restaurant Interior | We Do Interior Design & Fit Out",
  description:
    "jbr restaurant interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/jbr-restaurant-interior',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
