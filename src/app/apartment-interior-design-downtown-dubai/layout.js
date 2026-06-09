import '../globals.css';

export const metadata = {
  title: "Apartment Interior Design in Downtown Dubai | WE DO ",
  description:
    "Transform your Downtown Dubai apartment with WE DO, apartment interior design, personalized finishes, smart home integration. Contact us!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/apartment-interior-design-downtown-dubai',
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
