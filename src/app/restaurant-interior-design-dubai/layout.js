import '../globals.css';

export const metadata = {
  title: "Restaurant Interior Design Dubai | We Do Interior Design & Fit Out",
  description:
    "Restaurant interior design Dubai, Best food and beverage interior design company in Dubai, UAE",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/restaurant-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
