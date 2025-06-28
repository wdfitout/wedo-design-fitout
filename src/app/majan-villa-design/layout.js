import '../globals.css';

export const metadata = {
  title: "Majan Villa Design | We Do Interior Design & Fit Out",
  description:
    "Majan villa interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/majan-villa-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
