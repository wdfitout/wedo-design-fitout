import '../globals.css';

export const metadata = {
  title: "Beachfront Hospitality Interior Design in Jumeirah Dubai | WE DO Interior Design & Fitout",
  description:
    " WE DO designs beachfront hospitality interiors in Jumeirah Dubai, beach clubs, restaurants & boutique hotels. Premium hospitality fitout.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/beachfront-hospitality-interior-jumeirah-dubai',
  },
  
  other: {
    publisher: "WE DO Interior Design & Fitout",
  }
};

export default function RootLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}