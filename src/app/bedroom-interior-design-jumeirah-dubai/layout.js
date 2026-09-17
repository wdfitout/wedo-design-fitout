import '../globals.css';

export const metadata = {
  title: "Bedroom Interior Design in Jumeirah Dubai | WE DO Interior Design & Fitout",
  description:
    "Redefine your bedroom with WE DO high-end bedroom interior design in Jumeirah Dubai. Personalized wardrobes, quality finishes and stylish layouts.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/bedroom-interior-design-jumeirah-dubai',
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