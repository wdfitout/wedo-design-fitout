import '../globals.css';

export const metadata = {
  title: "Jumeirah 1 Beauty Salon Interior Design & Fit Out",
  description:
    "Explore our Jumeirah 1 salon interior design. WE DO creates luxury beauty salons in Dubai with custom furnitures & functional layouts. Visit Us",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/jumeirah-1-beauty-salon',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
