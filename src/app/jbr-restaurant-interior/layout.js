import '../globals.css';

export const metadata = {
  title: "JBR Restaurant Interior Design - Jumeirah Beach Residence ",
  description:
    "JBR restaurant interior design Dubai. Get professional restaurant interior services in Jumeirah Beach Residence by WEDO. Contact Us",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/jbr-restaurant-interior',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
