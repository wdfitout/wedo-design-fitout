import '../globals.css';

export const metadata = {
  title: "Arabian Ranches Modern Villa",
  description:
    "Arabian Ranches Modern Villa",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/arabian-ranches-modern-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
