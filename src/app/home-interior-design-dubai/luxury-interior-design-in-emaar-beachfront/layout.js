import '../../globals.css';

export const metadata = {
  title: "Emaar Beachfront interior design dubai | We Do Interiors",
  description: "Explore Emaar Beachfront apartments & splendour villas in Dubai with iconic sea views and white sands at Emaar Beachfront Designed By We do Interiors.",
alternates: {
    canonical: "https://www.wedointerior.ae/home-interior-design-dubai/luxury-interior-design-in-emaar-beachfront",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}