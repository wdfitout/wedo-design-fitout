import '../globals.css';

export const metadata = {
  title: "Boulevard Point Penthouse Interior Design Dubai",
  description:
    "Boulevard point penthouse interior design Dubai by WE DO showcases luxury penthouse design in Downtown, featuring bespoke interiors. Contact Us",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/boulevard-point-penthouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
