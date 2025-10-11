import '../globals.css';

export const metadata = {
  title: "Arabella 2 Bedroom Townhouse | We Do Interior",
  description:
    "Arabella 2 Bedroom Townhouse by WE DO, the Best Townhouse Interior Design Company in Dubai, showcases luxury, comfort, and bespoke modern style.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/arabella-2-bedroom-townhouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
