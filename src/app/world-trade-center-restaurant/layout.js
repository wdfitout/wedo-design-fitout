import '../globals.css';

export const metadata = {
  title: "World trade center restaurant Interior Design Dubai",
  description:
    "World trade center restaurant interior design Dubai crafter by WE DO Interior, blending modern design, premium fit out, and elegant ambiance.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/world-trade-center-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
