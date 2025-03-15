import '../../globals.css';

export const metadata = {
  title: "The Penthouse Dubai - Modern House Design - We Do Interiors",
  description: "Unlock the potential of 2W Residence penthouse. We Do Interiors will transform the penthouse Dubai haven into a masterpiece, reflecting your personality.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}