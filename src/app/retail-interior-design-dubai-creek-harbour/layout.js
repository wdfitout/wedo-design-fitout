import '../globals.css';

export const metadata = {
  title: "Retail Interior Design Dubai Creek Harbour | WE DO",
  description:
    "Retail interior design & turnkey fit-out in Dubai Creek Harbour. Boutiques, showrooms & flagship stores. 15+ years, in-house joinery. Get a quote today.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/retail-interior-design-dubai-creek-harbour',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="publisher" content="WE DO Interior Design & Fitout">
      </meta><body>{children}</body>
    </html>
  );
}
