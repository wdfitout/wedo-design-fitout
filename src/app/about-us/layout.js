import '../globals.css';

export const metadata = {
  title: "About Us | We Do Interior Design & Fit Out",
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
      <body>{children}</body>
    </html>
  );
}
