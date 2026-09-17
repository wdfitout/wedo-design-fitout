import '../globals.css';

export const metadata = {
  title: "Design and Build Company in Dubai | WE DO Interior Design & Fitout",
  description:
    " WE DO is Dubai's trusted design and build company, one team handling design, approvals & construction for residential and commercial projects.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/design-build-services-in-dubai',
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