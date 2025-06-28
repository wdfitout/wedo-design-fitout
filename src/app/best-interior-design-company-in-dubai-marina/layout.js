import '../globals.css';

export const metadata = {
  title: "Best Interior Design Company in Dubai Marina | We Do Interior",
  description:
    "Best interior design company in Dubai marina",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/best-interior-design-company-in-dubai-marina',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
