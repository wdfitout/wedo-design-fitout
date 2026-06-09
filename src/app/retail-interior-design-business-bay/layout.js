import '../globals.css';

export const metadata = {
  title: "Retail Interior Design in Business Bay Dubai | WE DO",
  description:
    "Looking for expert retail interior design in Business Bay Dubai? WE DO deliver premium retail fitout Business Bay, boutiques etc. Contact Today!",
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
