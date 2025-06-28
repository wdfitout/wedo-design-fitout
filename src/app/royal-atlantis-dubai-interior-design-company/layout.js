import '../globals.css';

export const metadata = {
  title: "Royal atlantis Dubai interior design company | We Do Interior Design & Fit Out",
  description:
    "Royal atlantis Dubai interior design company",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/royal-atlantis-dubai-interior-design-company',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
