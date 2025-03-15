import '../../globals.css';

export const metadata = {
  title: "Fujiya Japanese Restaurant Downtown Dubai",
  description: "Discover the heart of Japan at Fujiya Restaurant Dubai. Our interior design captures the essence Japanese aesthetics. Contact  We Do Interiors",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}