import '../globals.css';

export const metadata = {
  title: "DIFC Luxury Restaurant Interior Design | WE DO Interior Design Dubai",
  description:
    "DIFC Luxury Restaurant Interior Design | WE DO Interior Design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/difc-luxury-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
