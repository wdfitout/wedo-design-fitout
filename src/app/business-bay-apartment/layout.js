import '../globals.css';

export const metadata = {
  title: "Business Bay Apartment Interior design dubai",
  description:
    "Transform your business bay apartment with the best interior design company in Dubai. We craft modern interiors with luxurious spaces. Call Now!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/business-bay-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
