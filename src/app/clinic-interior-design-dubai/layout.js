import '../globals.css';

export const metadata = {
  title: "Clinic Interior Design Dubai - Healthcare fitout",
  description:
    "WE DO Interior Design & Fitout offers expert clinic interior design in Dubai with modern solutions for clinics, hospitals & healthcare. Visit Now",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/clinic-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
