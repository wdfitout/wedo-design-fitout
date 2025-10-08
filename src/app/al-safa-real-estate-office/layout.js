import '../globals.css';

export const metadata = {
  title: "Al Safa, Real Estate Office Interior Design Dubai",
  description:
    "Al Safa, real estate office interior design by WE DO blends modern design, functionality & elegance. Expert office interior fit-out company in Dubai. ",
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
