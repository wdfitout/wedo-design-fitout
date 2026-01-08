import '../globals.css';

export const metadata = {
  title: "Palm Jumeirah Barber Shop | We Do Interior Design & Fit Out",
  description:
    "Explore our Palm Jumeirah Barber Shop Interior project,modern barber shop interior design Dubai with stylish spaces, luxury fit-out & refined details",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/palm-jumeirah-barber-shop',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
