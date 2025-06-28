import '../globals.css';

export const metadata = {
  title: "Al Quoz, Central Kitchen Interior Design | We Do Interior",
  description:
    "Al Quoz, central kitchen interior design",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-quoz-central-kitchen',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
