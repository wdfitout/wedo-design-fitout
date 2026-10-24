import '../globals.css';

export const metadata = {
  title: "Business Bay Modern Restaurant Interior | WE DO Interior Design Dubai",
  description:
    "Business Bay Modern Restaurant Interior | WE DO Interior Design Dubai.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/business-bay-modern-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
