import '../globals.css';

export const metadata = {
  title: "Boulevard Point Penthouse Interior Design Dubai | We Do Interior",
  description:
    "Boulevard point penthouse interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/boulevard-point-penthouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
