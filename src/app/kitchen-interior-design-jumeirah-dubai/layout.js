import '../globals.css';

export const metadata = {
  title: "Kitchen Interior Design in Jumeirah Dubai | WE DO Interior Design & Fitout",
  description:
    "WE DO delivers premium kitchen interior design in Jumeirah Dubai, including custom cabinetry, luxury finishes and smart layouts.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/kitchen-interior-design-jumeirah-dubai',
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