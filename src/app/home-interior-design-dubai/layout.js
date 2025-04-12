import "../globals.css";

export const metadata = {
  title: "Home Interior Design | interior designer dubai | We Do Interior",
  description: "Elevate your home interior design with one of the best interior companies in Dubai. Browse our website and Book FREE consultation now with we do interior!",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
