import '../../globals.css';

export const metadata = {
  title: "Häagen-Dazs Ice Cream Home - Best Interior Design Dubai",
  description: "Haagen Dazs boasts stunning Dubai design by We Do interiors. Best interior design company Dubai known for restaurant interior design. Contact Us.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}