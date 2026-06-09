import '../globals.css';

export const metadata = {
  title: "Office Interior Design in Downtown Dubai | WE DO",
  description:
    " Looking for expert office interior design in Downtown Dubai? WE DO delivers premium office fitout,  executive suites, full floor fitouts & corporate spaces.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/office-interior-design-downtown-dubai',
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
