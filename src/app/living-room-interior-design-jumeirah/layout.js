import '../globals.css';

export const metadata = {
  title: "Living Room Interior Design in Jumeirah Dubai | WE DO Interior Design & Fitout",
  description:
    "Transform your living room with WE DO, luxury living room interior design. Bespoke furniture, lighting & layouts that bring families together.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/living-room-interior-design-jumeirah',
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
