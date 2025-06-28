import '../globals.css';

export const metadata = {
  title: "Villa Interior Design Dubai | We Do Interior Design & Fit Out",
  description:
    "Villa interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/villa-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
