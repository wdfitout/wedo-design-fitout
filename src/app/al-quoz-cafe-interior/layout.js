import '../globals.css';

export const metadata = {
  title: "Al-Quoz, Dubai, Cafe Interior Design | We Do Interior",
  description:
    "Al-Quoz, Dubai, cafe interior design ",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-quoz-cafe-interior',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
