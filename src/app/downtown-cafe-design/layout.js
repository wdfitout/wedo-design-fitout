import '../globals.css';

export const metadata = {
  title: "Downtown cafe design | We Do Interior",
  description:
    "Downtown cafe interior design in Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/downtown-cafe-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
