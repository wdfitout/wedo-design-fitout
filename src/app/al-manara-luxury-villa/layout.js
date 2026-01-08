import '../globals.css';

export const metadata = {
  title: "Al Manara, Dubai, Luxury Villa interior design | We Do Interior",
  description:
    "Al Manara, Dubai, luxury villa interior design",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-manara-luxury-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
