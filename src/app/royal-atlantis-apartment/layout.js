import '../globals.css';

export const metadata = {
  title: "Royal Atlantis Apartment | We Do Interior Design & Fit Out",
  description:
    "Royal atlantis apartment interior design, Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/royal-atlantis-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
