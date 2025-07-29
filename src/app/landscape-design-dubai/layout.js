import '../globals.css';

export const metadata = {
  title: "Luxury Landscape Company in Dubai - Landscape Design Dubai ",
  description:
    "Enhance your outdoors with expert landscape design in Dubai by WE DO Interior Design & Fit-Out. We offer villa landscaping, garden design, and outdoor solutions across Dubai and the UAE.  Call Now.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/apartment-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
