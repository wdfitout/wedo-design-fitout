import '../globals.css';

export const metadata = {
  title: "Beauty Salon Interior Design Dubai - Salon & Spa Fit-Out ",
  description:
    "Luxury beauty salon interior design Dubai by WE DO Interior. From spa fit-outs to salons in Dubai Hills, Jumeirah & Downtown. Contact us today!",
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
