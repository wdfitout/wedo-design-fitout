import '../globals.css';

export const metadata = {
  title: "Joinery Services in Dubai | WE DO Interior Design & Fitout",
  description:
    "WE DO delivers bespoke joinery services in Dubai, custom cabinetry, wardrobes & furniture built to the highest standard.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/joinery-company-dubai',
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