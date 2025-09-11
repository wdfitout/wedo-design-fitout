import '../globals.css';

export const metadata = {
  title: "Downtown Dubai Restaurant Interior Design",
  description:
    "WE DO Interior Design & Fitout specializes in Downtown Dubai Restaurant design. Known as the Best Interior Design Company. Contact us today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/downtown-dubai-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
