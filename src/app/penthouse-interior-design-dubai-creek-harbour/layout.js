import '../globals.css';

export const metadata = {
  title: "Penthouse Interior Design Dubai Creek Harbour - WE DO",
  description:
    " Luxury penthouse interior design in Dubai Creek Harbour. Bespoke fit-out, Emaar approvals handled, 3D visualization included. View our penthouse projects.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/penthouse-interior-design-dubai-creek-harbour',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="publisher" content="WE DO Interior Design & Fitout">
      </meta><body>{children}</body>
    </html>
  );
}
