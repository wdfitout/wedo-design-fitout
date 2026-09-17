import '../globals.css';

export const metadata = {
  title: "Restaurant Interior Design in Business Bay Dubai | WEDO",
  description:
    "  Looking for restaurant interior design in Business Bay Dubai? WE DO deliver premium restaurants fitout Business Bay. Visit Us Today.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/restaurant-interior-design-business-bay',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="keywords" content="office interior design business bay, office fit out business bay dubai, office interior design dubai, commercial interior design dubai, office fit out company in Dubai, office interior fit out dubai, business bay office interior design, office design commercial fit out dubai, interior design company business bay dubai, office renovation business bay, workspace interior design dubai"></meta>
      <meta name="publisher" content="WE DO Interior Design & Fitout">
      </meta><body>{children}</body>
    </html>
  );
}
