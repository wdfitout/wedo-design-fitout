import '../globals.css';

export const metadata = {
  title: "Palm Jumeirah Apartment | We Do Interior Design & Fit Out",
  description:
    "Palm jumeirah apartment interior design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/palm-jumeirah-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
