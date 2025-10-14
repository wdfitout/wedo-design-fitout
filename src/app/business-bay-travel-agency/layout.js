import '../globals.css';

export const metadata = {
  title: "Business Bay Travel Agency Interior Design Project",
  description:
    " Browse Business bay travel agency interior design. Top interior fitout company in business bay offering designs, renovations & premium fitout solutions.",
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
