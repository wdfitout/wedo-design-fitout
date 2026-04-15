import '../globals.css';

export const metadata = {
  title: " Commercial Interior Fit-out in Business Bay Dubai | WEDO",
  description:
    "Expert modern commercial interior fit-out and luxury office design in Business Bay Dubai by leading WE DO Interior Design & Fitout.",
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
