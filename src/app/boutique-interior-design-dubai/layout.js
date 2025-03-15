import "../globals.css";

export const metadata = {
  title: "Exclusive Boutique Interior Design Dubai | Stylish Spaces Dubai",
  description: "Exclusive boutique interior design in Dubai. WeDo Interior crafts stylish, bespoke spaces to enhance your brand and captivate clients. Start your project today!",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

