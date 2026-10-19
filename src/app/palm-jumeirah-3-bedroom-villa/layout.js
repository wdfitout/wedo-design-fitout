import '../globals.css';

export const metadata = {
  title: "Palm Jumeirah 3 Bedroom Villa Design by we Do Interior",
  description:
    "Palm Jumeirah 3 Bedroom Villa Interior Design by WE DO Interior Design Dubai. Explore our portfolio of luxurious interior design projects.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/palm-jumeirah-3-bedroom-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
