import '../globals.css';

export const metadata = {
  title: "Joinery Company Dubai | We Do Interior Design & Fit Out",
  description:
    " Joinery company Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/joinery-company-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
