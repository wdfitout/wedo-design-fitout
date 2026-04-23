import '../globals.css';

export const metadata = {
  title: "About Us - We Do Interior Design & Fit Out",
  description:
    "Best interior design company in Dubai. We Do Interior Design. We are offering professional services of Interior Design and fitout. Contact us today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/about-us',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <meta name="publisher" content="WE DO Interior Design and Fitout"></meta>
    <meta name="keywords" content="WE DO Interior Design and Fitout, interior design company Dubai, Dubai interior design services, luxury interior design Dubai, villa interior design Dubai, commercial interior design UAE, residential interior design UAE, fit-out company Dubai, renovation services Dubai, modern interior design UAE, bespoke interior design Dubai, high-end interior designers Dubai, interior fit-out UAE, office interior design Dubai, turnkey interior solutions Dubai"></meta>
      <body>{children}</body>
    </html>
  );
}
