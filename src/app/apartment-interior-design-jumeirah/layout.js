import '../globals.css';

export const metadata = {
  title: "Apartment Interior Design in Jumeirah | WE DO Interior Design & Fitout",
  description:
    "WE DO Interior Design & Fitout curates elegant and welcoming apartment interiors across Jumeirah, from beachside areas to family homes.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/apartment-interior-design-jumeirah',
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