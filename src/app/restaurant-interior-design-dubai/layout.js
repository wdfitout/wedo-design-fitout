import "../globals.css";

export const metadata = {
  title: "Exceptional Restaurant Interior Design Dubai | Stylish Spaces",
  description: "Exceptional restaurant, cafe, and coffee shop interior designs in Dubai by WeDo Interior. Our team is highly skilled and professional. Contact us today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
