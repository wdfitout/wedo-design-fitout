import '../globals.css';

export const metadata = {
  title: "Al Safa, Real Estate Office Interior Design | We Do Interior",
  description:
    "Al Safa, real estate office interior design",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-safa-real-estate-office',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
