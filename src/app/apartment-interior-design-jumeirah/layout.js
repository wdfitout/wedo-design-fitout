import '../globals.css';

export const metadata = {
  title: "Apartment Interior Design in Jumeirah | WE DO Interior Design & Fitout",
  description:
    "WE DO Interior Design & Fitout curates elegant and welcoming apartment interiors across Jumeirah, from beachside areas to family homes.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/apartment-interior-design-jumeirah',
  },
 
  other: {
    publisher: "WE DO Interior Design & Fitout",
  }
};

export default function Layout({ children }) {
  return (
    <>
      {children}
    </>
  );
}