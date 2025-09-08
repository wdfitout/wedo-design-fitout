import '../globals.css';

export const metadata = {
  title: "II PRIMO Penthouse Interior Design Dubai",
  description:
    "Discover the luxury in II PRIMO Penthouse. As a penthouse interior design company in Dubai, WE DO delivers the best interior design services in Downtown. ",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/ii-primo-penthouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
