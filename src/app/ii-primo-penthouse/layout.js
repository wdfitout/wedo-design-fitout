import '../globals.css';

export const metadata = {
  title: "ii Primo Penthouse | We Do Interior Design & Fit Out",
  description:
    "ii primo penthouse interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/ii-primo-penthouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
