import '../globals.css';

export const metadata = {
  title: "Al Barsha, Dubai, Lounge interior design | We Do Interior",
  description:
    "Al Barsha, Dubai, lounge interior design",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-barsha-lounge',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
