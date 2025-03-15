import '../../globals.css';

export const metadata = {
  title: "Crazy Mask Cafe Interior Design Dubai - We Do Interiors",
  description: "Step into the world of Crazy Mask Cafe designed by best interior design company Dubai. Ready to create your own unique Dubai cafe?  Contact We Do Interiors",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}