import '../globals.css';

export const metadata = {
  title: "Fountain Views Apartment | We Do Interior",
  description:
    "Fountain views apartment interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/fountain-views-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
