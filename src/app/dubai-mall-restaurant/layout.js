import '../globals.css';

export const metadata = {
  title: "Dubai Mall Restaurant | We Do Interior",
  description:
    "Dubai mall restaurant interior design",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/dubai-mall-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
