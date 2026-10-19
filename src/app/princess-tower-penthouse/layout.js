import '../globals.css';

export const metadata = {
  title: "Princess Tower Penthouse Interior Design Dubai",
  description:
    "Penthouse Interior Design in Dubai by WE DO Interior Design. Explore our portfolio of luxurious interior design projects.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/princess-tower-penthouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
