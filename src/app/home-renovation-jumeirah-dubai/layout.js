import '../globals.css';

export const metadata = {
  title: " Home Renovation in Jumeirah Dubai | WE DO Interior Design & Fitout",
  description:
    "WE DO delivers complete home renovation in Jumeirah Dubai, villas and apartments, room by room or full transformation. Trusted renovation specialists.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/home-renovation-jumeirah-dubai',
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