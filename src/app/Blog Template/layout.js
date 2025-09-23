import '../globals.css';

export const metadata = {
  title: " 5 Modern Apartment Interior Design Tips in 2025 by WEDO",
  description:
    "Discover modern apartment interior designs in 2025. Explore 5 trending styles in Dubai, from minimalism to boho, for elegant living spaces. ",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/modern-apartment-interior-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
