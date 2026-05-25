import '../globals.css';

export const metadata = {
  title: " Guide to Dubai Creek Harbour Waterfront Apartment Design | WE DO Interior Design & Fitout",
  description:
    "Discover the ultimate guide to Waterfront Apartment Design in Dubai Creek Harbour. Learn expert tips, trends, and ideas from WE DO interiors.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/creek-harbour-waterfront-apartment-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
