import '../globals.css';

export const metadata = {
  title: "Villa Construction Company in Dubai | WE DO Interior Design & Fitout",
  description:
    "WE DO delivers premium villa construction in Dubai, from foundation to finishing. Trusted villa builders with design and build expertise.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/villa-construction-dubai',
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