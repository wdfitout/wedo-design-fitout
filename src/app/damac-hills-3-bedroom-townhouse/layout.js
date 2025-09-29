import '../globals.css';

export const metadata = {
  title: "Damac Hills 3 Bedroom Townhouse Interior Design",
  description:
    "Explore our Damac Hills 3 Bedroom Townhouse Interior Design project, where bespoke interiors, 3D planning & luxury finishes define Dubai living.",
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
