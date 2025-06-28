import '../globals.css';

export const metadata = {
  title: "Al Safa, Dubai, Cafe Interior Design | We Do Interior",
  description:
    "Al Safa, Dubai, cafe interior design",
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
