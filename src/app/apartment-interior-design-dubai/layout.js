
import "../globals.css";

export const metadata = {
  title: "Luxury Apartment Interior Design Dubai | WeDo Elegant Solutions",
  description: "Discover luxury apartment interior design services in Dubai with WeDo Interior. We create elegant, tailored spaces that reflect your unique style and vision.",
alternates: {
    canonical: "https://www.wedointerior.ae/apartment-interior-design-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}