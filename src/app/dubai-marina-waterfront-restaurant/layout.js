import '../globals.css';

export const metadata = {
  title: "Dubai Marina Waterfront Restaurant Design",
  description:
    "Dubai Marina Waterfront Restaurant Design | WE DO Interior Design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/dubai-marina-waterfront-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
