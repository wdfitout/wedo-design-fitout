import '../globals.css';

export const metadata = {
  title: "Beachfront Interior Design in Jumeirah Dubai | WE DO Interior Design & Fitout",
  description:
    "Transform your beachfront home with WE DO, luxury beachfront interior design. Coastal-inspired living, premium finishes & sea view design.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/beachfront-interior-design-jumeirah-dubai',
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