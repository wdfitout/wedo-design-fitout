import '../../globals.css';

export const metadata = {
  title: "Interior Design in Atlantis The Royal Duplex Apartment - We Do",
  description: " Dive into luxury with Atlantis The Royal Duplex. Our interior design blends aquatic elegance with regal grandeur. Contact We Do Interior to design your space.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}