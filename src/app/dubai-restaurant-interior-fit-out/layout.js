import '../globals.css';

export const metadata = {
  title: "Dubai Restaurant Interior Fit Out | We Do Interior",
  description:
    "Dubai restaurant interior fit out",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/dubai-restaurant-interior-fit-out',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
