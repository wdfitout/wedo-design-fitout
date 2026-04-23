import '../globals.css';

export const metadata = {
  title: "Contact Us | We Do Interior Design & Fit Out",
  description:
    "Get in touch with WE DO Interior Design & Fitout for expert interior design, fit-out in Dubai. Contact Us today for consultations and project inquiries.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/contact-us',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="keywords" content="contact interior design company Dubai, WE DO Interior Design contact, interior design consultation Dubai, fit-out company contact UAE, Dubai interior designers contact, villa interior design inquiry Dubai, commercial fit-out contact Dubai, renovation company contact UAE, interior design services enquiry Dubai, best interior design company Dubai contact"></meta>

<meta name="publisher" content="WE DO Interior Design and Fitout"></meta>
      <body>{children}</body>
    </html>
  );
}
