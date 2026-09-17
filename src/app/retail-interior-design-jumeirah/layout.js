import '../globals.css';

export const metadata = {
  title: "Retail Interior Design in Jumeirah Dubai | WE DO Interior Design & Fitout",
  description:
    "WE DO delivers premium retail interior design in Jumeirah Dubai, luxury boutiques, concept stores & brand flagships.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/retail-interior-design-jumeirah',
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