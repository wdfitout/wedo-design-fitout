import '../globals.css';

export const metadata = {
  title: "Al Wasl, Apartment Interior Design Dubai",
  description:
    " Explore Our Al Wasl, apartment interior design Project in Dubai.One of the Best Residential Interior Design Service Company. Contact us",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-wasl-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
