import '../globals.css';

export const metadata = {
  title: "Al Barari Modern Villa",
  description:
    "Al Barari modern villa",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-barari-modern-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
