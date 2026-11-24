import '../globals.css';

export const metadata = {
  title: "Al-Quoz Cafe Interior Design Dubai | We Do Interior",
  description:
    "WE DO completed the Al Qouz cafe Interior project. As the best café interior design company in Dubai, we provide complete Café fit-out services. Call Now ",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-quoz-cafe-interior',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
