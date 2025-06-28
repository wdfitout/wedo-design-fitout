import '../globals.css';

export const metadata = {
  title: "Madinat Jumeirah Living Asayel Apartment | We Do Interior Design & Fit Out",
  description:
    "Madinat jumeirah living asayel apartment interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/madinat-jumeirah-living-asayel-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
