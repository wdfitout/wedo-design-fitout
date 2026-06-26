import '../globals.css';

export const metadata = {
  title: "Design and Build Company in Dubai | WE DO Interior Design & Fitout",
  description:
    " WE DO is Dubai's trusted design and build company, one team handling design, approvals & construction for residential and commercial projects.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/design-build-services-in-dubai',
  },
  keywords: [
    "office interior design business bay", 
    "office fit out business bay dubai", 
    "office interior design dubai", 
    "commercial interior design dubai", 
    "office fit out company dubai", 
    "office interior fit out dubai", 
    "business bay office interior design", 
    "office design commercial fit out dubai", 
    "interior design company business bay dubai", 
    "office renovation business bay", 
    "workspace interior design dubai"
  ],
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