import '../globals.css';

export const metadata = {
  title: "Apartment Interior Design in Business Bay Dubai",
  description:
    "WE DO delivers luxury apartment interior design in Business Bay. Get expert fit-out, smart layouts & modern finishes. Contact us today!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/apartment-interior-design-business-bay',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="keywords" content="apartment interior design business bay, apartment interior design dubai, business bay interior design company, apartment fit out business bay, luxury apartment interior design dubai, modern apartment design business bay, apartment renovation business bay, interior fit out company dubai, residential interior design business bay, turnkey apartment fit out dubai, WE DO interior design business bay"></meta>
      <meta name="publisher" content="WE DO Interior Design & Fitout">
      </meta><body>{children}</body>
    </html>
  );
}
