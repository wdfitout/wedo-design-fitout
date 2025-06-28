import '../globals.css';

export const metadata = {
  title: "Interior Design Companies Downtown Dubai | We Do Interior Design & Fit Out",
  description:
    "Interior design companies downtown Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/interior-design-companies-downtown-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
