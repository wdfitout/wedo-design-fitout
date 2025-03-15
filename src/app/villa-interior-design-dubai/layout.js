import "../globals.css";

export const metadata = {
  title: "Premium Villa Interior Design Dubai | WeDo Elegant Spaces",
  description: "Transform your villa with premium villa interior design in Dubai by WeDo Interior. We create elegant, tailored spaces for luxury living. Contact us today!",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
