import '../globals.css';

export const metadata = {
  title: " Commercial Interior Fit-out in Business Bay Dubai | WEDO",
  description:
    "Transform your workspace with premium commercial interior fit-out in Business Bay Dubai. WE DO Interior Design & Fitout offers expert office designs and tailored fit-out services. ",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/commercial-interior-fit-out',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
