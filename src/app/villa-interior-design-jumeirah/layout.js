import '../globals.css';

export const metadata = {
  title: "Villa Interior Design in Jumeirah Dubai | WE DO Interior Design & Fitout",
  description:
    "Custom villa interior design in Jumeirah, Pearl Jumeirah, Umm Suqeim and Jumeirah Bay Island. WE DO offers interior design services across Dubai.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/villa-interior-design-jumeirah',
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