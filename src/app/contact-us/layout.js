import '../globals.css';

export const metadata = {
  title: "Contact Us | We Do Interior Design & Fit Out",
  description:
    "We Do Interior Design & Fit Out",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/contact-us',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
