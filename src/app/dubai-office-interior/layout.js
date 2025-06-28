import '../globals.css';

export const metadata = {
  title: "Dubai office Interior | We Do Interior",
  description:
    "Dubai office interior design",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/dubai-office-interior',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
