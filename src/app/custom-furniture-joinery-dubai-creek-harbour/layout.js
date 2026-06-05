import '../globals.css';

export const metadata = {
  title: "Custom Furniture & Joinery Dubai Creek Harbour | WE DO",
  description:
    "Transform your Creek Harbour property with premium custom made furniture, wardrobes, & kitchen cabinetry. 15+ years of bespoke in-house joinery excellence in Dubai.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/custom-furniture-joinery-dubai-creek-harbour',
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
