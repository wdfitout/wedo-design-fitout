import '../globals.css';

export const metadata = {
  title: "MBR City Neo Classic Villa Design by we Do Interior",
  description:
    "Discover the luxury in MBR City Neo Classic Villa. As a villa interior design company in Dubai, WE DO delivers the best.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/mbr-city-neo-classic-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
