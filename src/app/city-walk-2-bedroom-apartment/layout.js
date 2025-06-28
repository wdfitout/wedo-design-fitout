import '../globals.css';

export const metadata = {
  title: "City walk 2 bedroom apartment | We Do Interior",
  description:
    "City walk 2 bedroom apartment interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/city-walk-2-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
