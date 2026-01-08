import '../globals.css';

export const metadata = {
  title: "Downtown cafe design and fitout in Dubai",
  description:
    "Downtown cafe design and fitout in Dubai.Partner with the leading Café Interior Design Company in Dubai. Contact Us",
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
