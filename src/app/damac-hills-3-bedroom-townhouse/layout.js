import '../globals.css';

export const metadata = {
  title: "Damac Hills 3 Bedroom Townhouse | We Do Interior",
  description:
    "Damac hills 3 bedroom townhouse interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/damac-hills-3-bedroom-townhouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
