import '../globals.css';

export const metadata = {
  title: "Business Bay restaurant Interior Design Dubai",
  description:
    "BWE DO Interior Design & Fitout transforms Business Bay restaurant interiors with bespoke design and premium fit out, creating stylish dining spaces.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/business-bay-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
