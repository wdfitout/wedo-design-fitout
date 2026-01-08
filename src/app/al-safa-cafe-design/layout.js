import '../globals.css';

export const metadata = {
  title: "Al Safa Cafe Design Dubai - Best Cafe Interior Designers",
  description:
    "Discover our  Al Safa café design, Dubai. WE DO creates stylish F&B Interior Designs with modern aesthetics, comfort, and functionality. Contact Us",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-safa-cafe-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
