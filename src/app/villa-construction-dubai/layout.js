import '../globals.css';

export const metadata = {
  title: "Villa Construction Company in Dubai | WE DO Interior Design & Fitout",
  description:
    "WE DO delivers premium villa construction in Dubai, from foundation to finishing. Trusted villa builders with design and build expertise.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/villa-construction-dubai',
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