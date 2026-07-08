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
  "villa construction dubai",
  "villa construction company dubai",
  "villa builders dubai",
  "custom villa design and build dubai",
  "new villa construction dubai",
  "luxury villa construction dubai",
  "villa renovation and rebuild dubai",
  "villa extension dubai",
  "villa structural works dubai",
  "villa MEP services dubai",
  "villa project management dubai",
  "dubai municipality villa approvals",
  "villa construction dubai hills",
  "villa construction arabian ranches",
  "villa construction palm jumeirah",
  "villa construction cost dubai",
  "villa construction timeline dubai"
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