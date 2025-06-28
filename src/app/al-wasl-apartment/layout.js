import '../globals.css';

export const metadata = {
  title: "Al Wasl, Apartment Interior Design | We Do Interior",
  description:
    "Al Wasl, apartment interior design",
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
