import '../globals.css';

export const metadata = {
  title: "Marina Gate Penthouse | We Do Interior Design & Fit Out",
  description:
    "Marina gate penthouse interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/marina-gate-penthouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
