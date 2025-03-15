import '../../globals.css';

export const metadata = {
  title: "Nest Finder - Interior Design Dubai - We Do Interiors",
  description: "Discover your perfect space like Nest Finder. We offer exceptional interior design services for homes and offices in Dubai. Contact We Do Interiors!",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


