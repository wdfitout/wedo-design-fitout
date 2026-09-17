import '../globals.css';

export const metadata = {
  title: "Living Room Interior Design in Jumeirah Dubai | WE DO Interior Design & Fitout",
  description:
    "Transform your living room with WE DO, luxury living room interior design. Bespoke furniture, lighting & layouts that bring families together.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/living-room-interior-design-jumeirah-dubai',
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