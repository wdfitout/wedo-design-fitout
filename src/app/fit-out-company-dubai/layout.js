import '../globals.css';

export const metadata = {
  title: "Fitout Company in Dubai | WE DO Interior Design & Fitout",
  description:
    "WE DO is a leading fitout company in Dubai, residential, commercial & hospitality fitout delivered by one integrated team.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/fit-out-company-dubai',
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