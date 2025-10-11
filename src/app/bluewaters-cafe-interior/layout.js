import '../globals.css';

export const metadata = {
  title: "Bluewaters Cafe Interior Design Dubai | We Do Interior",
  description:
    "Bluewaters Cafe Interior by WE DO features a luxury and modern café design in Dubai, reflecting elegance, comfort, and premium F&B interiors.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/bluewaters-cafe-interior',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
