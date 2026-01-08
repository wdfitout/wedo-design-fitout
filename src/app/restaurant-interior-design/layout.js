import '../globals.css';

export const metadata = {
  title: "Restaurant Interior Design - Restaurants & Café Interior Designers",
  description:
    "Restaurant Fit-Out Services in Dubai, UAE – WE DO Interior Design is a top restaurant interior design company creating bespoke dining spaces.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/apartment-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
