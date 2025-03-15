import "../globals.css";

export const metadata = {
  title: "Luxury Home Interior Design Dubai | Elegant & Functional Spaces",
  description: "Discover luxury home interior designs in Dubai by WeDo Interior. We create luxury, elegant and functional spaces for villas and apartments. Contact us today!",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
