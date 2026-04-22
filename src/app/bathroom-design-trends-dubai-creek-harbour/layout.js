import '../globals.css';

export const metadata = {
  title: " Luxury Bathroom Design Trends in Dubai Creek Harbour | WEDO",
  description:
    "Explore luxury bathroom trends in Dubai Creek Harbour with WE DO Interior Design: spa-layouts, smart tech, and premium finishes.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/bathroom-design-trends-dubai-creek-harbour',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
