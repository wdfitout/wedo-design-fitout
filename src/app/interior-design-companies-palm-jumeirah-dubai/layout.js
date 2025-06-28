import '../globals.css';

export const metadata = {
  title: "Interior Design Companies, Palm Jumeirah Dubai | We Do Interior Design & Fit Out",
  description:
    "Interior design companies palm jumeirah Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/interior-design-companies-palm-jumeirah-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
