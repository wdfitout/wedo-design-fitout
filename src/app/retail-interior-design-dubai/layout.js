import '../globals.css';

export const metadata = {
  title: "Retail Interior Design Dubai | We Do Interior Design & Fit Out",
  description:
    "Retail interior design Dubai, Luxury retail interior design company in Dubai, UAE",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/retail-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
