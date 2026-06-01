import '../globals.css';

export const metadata = {
  title: "retail Interior Design Business Bay - WE DO",
  description:
    " Luxury retail interior design in Business Bay. Bespoke fit-out, Emaar approvals handled, 3D visualization included. View our retail projects.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/retail-interior-design-business-bay',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="keywords" content="office interior design business bay, office fit out business bay dubai, office interior design dubai, commercial interior design dubai, office fit out company dubai, office interior fit out dubai, business bay office interior design, office design commercial fit out dubai, interior design company business bay dubai, office renovation business bay, workspace interior design dubai"></meta>
      <meta name="publisher" content="WE DO Interior Design & Fitout">
      </meta><body>{children}</body>
    </html>
  );
}
