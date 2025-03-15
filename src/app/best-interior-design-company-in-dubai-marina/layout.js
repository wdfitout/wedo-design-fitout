import "../globals.css";

export const metadata = {
  title: "Best Interior Design Company in Dubai Marina | Luxury Spaces",
  description: "Get connected with the best interior design company in Dubai Marina. WeDo Interior specializes in creating luxury spaces crafted to your vision. Contact us today!",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}