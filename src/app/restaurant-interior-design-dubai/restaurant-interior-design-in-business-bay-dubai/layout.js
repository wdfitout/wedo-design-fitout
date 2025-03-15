import '../../globals.css';

export const metadata = {
  title: "Sah-el-nom express business bay interior design-We Do interiors",
  description: "Discover Sah-el-nom Express Business Bay, designed by We Do interior design company Dubai! Contact us to transform your space Today!",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}