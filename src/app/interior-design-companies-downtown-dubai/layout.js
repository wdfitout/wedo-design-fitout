import "../globals.css";

export const metadata = {
  title: "Interior Design Companies in Downtown Dubai | Luxury Spaces",
  description: "Explore top interior design company in Downtown Dubai WeDo Interior. Our skilled team crafts luxury spaces tailored to your style and needs. Contact us today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
