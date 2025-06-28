import '../globals.css';

export const metadata = {
  title: "Dubai Creek 2 Bedroom Apartment | We Do Interior",
  description:
    "Dubai creek 2 bedroom apartment interior design",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/dubai-creek-2-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
