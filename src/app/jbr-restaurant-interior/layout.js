import '../globals.css';

export const metadata = {
  title: "JBR Restaurant Interior Design - Jumeirah Beach Residence ",
  description:
    "jbr restaurant interior design Dubai. Get professional restaurant interior services in Jumeirah Beach Residence by WEDO. Conatact Us",
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
