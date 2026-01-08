import '../globals.css';

export const metadata = {
  title: "Fit Out Company Dubai | We Do Interior",
  description:
    "Fit out company Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/fit-out-company-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
