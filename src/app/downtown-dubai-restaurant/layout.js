import '../globals.css';

export const metadata = {
  title: "Downtown Dubai Restaurant | We Do Interior",
  description:
    "Downtown dubai restaurant interior design",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/downtown-dubai-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
