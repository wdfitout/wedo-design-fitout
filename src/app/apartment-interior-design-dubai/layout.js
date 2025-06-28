import '../globals.css';

export const metadata = {
  title: "Apartment Interior Design Dubai | We Do Interior",
  description:
    "We Do Interior creates a unique and beautiful floor and ceiling architecture with modern technology. Best apartment interior design company in Dubai, UAE",
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
