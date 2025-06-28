import '../globals.css';

export const metadata = {
  title: "Interior design companies near Dubai Hills | We Do Interior Design & Fit Out",
  description:
    "Interior design companies near Dubai Hills",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/interior-design-companies-near-dubai-hills',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
