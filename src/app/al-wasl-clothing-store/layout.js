import '../globals.css';

export const metadata = {
  title: "Al Wasl, Clothing Store Interior Design | We Do Interior",
  description:
    "Al Wasl, clothing store interior design",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-wasl-clothing-store',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
