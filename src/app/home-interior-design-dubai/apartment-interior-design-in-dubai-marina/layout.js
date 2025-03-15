import '../../globals.css';

export const metadata = {
  title: "Apartment Interior Design in Dubai Marina | WeDo Interior Dubai",
  description: "Unlock the potential of apartment interior design in Dubai Marina, Dubai. We Do Interiors will transform the Dubai Marina apartment haven into a masterpiece, reflecting your personality.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}