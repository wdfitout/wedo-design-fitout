import '../../globals.css';

export const metadata = {
  title: "Lila Milano Kitchen | Restaurant Interior Design Dubai",
  description: "Our premier project of Lila MIlano Kitchen Interior Design Dubai design by We Do interiors. We are here for creating best bars in Dubai.Contact us!",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}