import '../globals.css';

export const metadata = {
  title: "Jumeirah Island Villa| WE DO Interior Design Dubai",
  description:
    "Jumeirah Island Villa| WE DO Interior Design Dubai",

  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/jumeirah-islands-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
