import '../globals.css';

export const metadata = {
  title: "Beachfront Interior Design in Jumeirah Dubai | WE DO Interior Design & Fitout",
  description:
    "Transform your beachfront home with WE DO, luxury beachfront interior design. Coastal-inspired living, premium finishes & sea view design.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/beachfront-interior-design-jumeirah-dubai',
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
