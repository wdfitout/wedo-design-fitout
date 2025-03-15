import '../../globals.css';

export const metadata = {
  title: "Classy YM Retail Shop Interior Design Dubai - We Do Interiors",
  description: "Create a stunning retail space with We Do Interiors. Experience the elegance of Classy YM retail shop with our expert interior design services in Dubai.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}