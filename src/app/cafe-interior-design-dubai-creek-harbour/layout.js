import '../globals.css';

export const metadata = {
  title: "Cafe Interior Design Dubai Creek Harbour | WE DO",
  description:
    "Expert cafe interior design in Dubai Creek Harbour. Custom concepts, space planning, 3D renders & full fitout. Trusted cafe fitout company Dubai. Get a free quote today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/cafe-interior-design-dubai-creek-harbour',
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
