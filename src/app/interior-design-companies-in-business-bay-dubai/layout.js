import '../globals.css';

export const metadata = {
  title: " Best Interior Design Companies in Business Bay",
  description:
    "Discover WE DO Interiors, a top interior design company in Business Bay, Dubai. Specializing in residential and commercial interior fit-out services.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/interior-design-companies-in-business-bay-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
