import '../globals.css';

export const metadata = {
  title: " 3-5-7 Rule in Interior Design Dubai | WE DO Interior Design & Fitout",
  description:
    "Find out more about the 3-5-7 rule in interior design. Get the best advice from an upscale interior design firm in Dubai for your villas and apartments.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/3-5-7-rule-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
