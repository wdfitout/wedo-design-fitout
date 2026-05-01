import '../globals.css';

export const metadata = {
  title: "Office Interior Design in Business Bay Dubai - Office Fit Out Company",
  description:
    "Ofice interior design in Business Bay Dubai by WE DO. Modern office fit-out, workspace planning, and commercial interior design in Dubai. Contact us!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/office-interior-design-business-bay',
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
