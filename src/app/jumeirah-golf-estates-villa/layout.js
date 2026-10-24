import '../globals.css';

export const metadata = {
  title: "Jumeirah Golf Estates Villa| WE DO Interior Design Dubai",
  description:
    "Jumeirah Golf Estates Villa| WE DO Interior Design Dubai",
    
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/jumeirah-golf-estates-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
