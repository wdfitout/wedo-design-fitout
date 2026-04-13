import '../globals.css';

export const metadata = {
  title: "Restaurant Interior Design - Restaurants & Café Interior Designers",
  description:
    "Restaurant Interior Design services in Dubai. WE DO Interiors is a top interior design company creating bespoke dining spaces. Call Now!!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/restaurant-interior-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="keywords" content="restaurant interior design Dubai, restaurant fit out Dubai, cafe interior design Dubai, F&B interior design Dubai, restaurant fit out contractors Dubai, restaurant design company Dubai, luxury restaurant interiors Dubai, commercial interior design Dubai, turnkey restaurant fit out Dubai, cafe fit out Dubai, restaurant renovation Dubai, hospitality interior design UAE, restaurant interior designers UAE, fine dining interior design Dubai, themed restaurant design Dubai, restaurant layout design Dubai, restaurant space planning Dubai, Dubai restaurant interior company, best restaurant interior designers Dubai, restaurant fit out services UAE"></meta>
      <body>{children}</body>
    </html>
  );
}
