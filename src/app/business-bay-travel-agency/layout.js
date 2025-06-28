import '../globals.css';

export const metadata = {
  title: "Business Bay Travel Agency Design Dubai | We Do Interior",
  description:
    "Business bay travel agency interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/business-bay-travel-agency',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
