import '../globals.css';

export const metadata = {
  title: "Kitchen Interior Design in Jumeirah Dubai | WE DO Interior Design & Fitout",
  description:
    "WE DO delivers premium kitchen interior design in Jumeirah Dubai, including custom cabinetry, luxury finishes and smart layouts.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/kitchen-interior-design-jumeirah-dubai',
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