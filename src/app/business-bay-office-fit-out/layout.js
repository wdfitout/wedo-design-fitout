import '../globals.css';

export const metadata = {
  title: "Business bay office fit out Dubai | We Do Interior",
  description:
    "Business bay office fit out Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/business-bay-office-fit-out',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
