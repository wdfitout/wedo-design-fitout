import '../globals.css';

export const metadata = {
  title: "Bedroom Interior Design in Jumeirah Dubai | WE DO Interior Design & Fitout",
  description:
    "Redefine your bedroom with WE DO high-end bedroom interior design in Jumeirah Dubai. Personalized wardrobes, quality finishes and stylish layouts.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/bedroom-interior-design-jumeirah',
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
