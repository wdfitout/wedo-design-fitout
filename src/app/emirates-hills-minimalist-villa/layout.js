import '../globals.css';

export const metadata = {
  title: "Emirates Hills Minimalist Villa Design by we Do Interior",
  description:
    "Villa Interior Design in Emirates Hills by WE DO Interior Design Dubai. Explore our portfolio of luxurious interior design projects.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/emirates-hills-minimalist-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
