import '../globals.css';

export const metadata = {
  title: "Palm Jumeirah 6 Bedroom Penthouse | We Do Interior Design & Fit Out",
  description:
    "Discover our Palm Jumeirah 6 Bedroom Penthouse Interior Design by WE DO Interior Design & Fitout, blending elegance, function & bespoke Dubai living.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/palm-jumeirah-6-bedroom-penthouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
