import '../globals.css';

export const metadata = {
  title: "Villa Interior Design in Jumeirah Dubai | WE DO Interior Design & Fitout",
  description:
    "Custom villa interior design in Jumeirah, Pearl Jumeirah, Umm Suqeim and Jumeirah Bay Island. WE DO offers interior design services across Dubai.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/villa-interior-design-jumeirah',
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