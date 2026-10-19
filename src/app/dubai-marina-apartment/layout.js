import '../globals.css';

export const metadata = {
  title: "Dubai Marina Apartment Design by we Do Interior",
  description:
    "Dubai Marina Apartment Interior Design by WE DO Interior Design Dubai. Explore our portfolio of luxurious interior design projects.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/dubai-marina-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
