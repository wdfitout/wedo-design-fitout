import '../globals.css';

export const metadata = {
  title: "World trade center restaurant | We Do Interior Design & Fit Out",
  description:
    "World trade center restaurant interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/world-trade-center-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
