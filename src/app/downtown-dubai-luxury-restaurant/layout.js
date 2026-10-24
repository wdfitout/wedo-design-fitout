import '../globals.css';

export const metadata = {
  title: "Downtown Dubai Luxury Restaurant Design | WE DO Interior Design Dubai",
  description:
    "Downtown Dubai Luxury Restaurant Design | WE DO Interior Design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/downtown-dubai-luxury-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
