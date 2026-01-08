import '../globals.css';

export const metadata = {
  title: "Fit Out Company In Business Bay Dubai | We Do Interior",
  description:
    "Fit out company in business bay Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/fit-out-company-in-business-bay-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
