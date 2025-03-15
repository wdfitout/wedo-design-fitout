import "../globals.css";

export const metadata = {
  title: "High-End Joinery Company Dubai | CNC Craftsmanship & Design",
  description: "WeDo Interior represents high-end joinery services in Dubai. We specialize in CNC craftsmanship and premium designs to elevate your interiors. Contact us today!",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
