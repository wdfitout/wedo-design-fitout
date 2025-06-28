import '../globals.css';

export const metadata = {
  title: "Restaurant Interior Design | We Do Interior Design & Fit Out",
  description:
    "Restaurant interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/restaurant-interior-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
