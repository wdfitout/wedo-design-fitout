import '../globals.css';

export const metadata = {
  title: "Royal atlantis Dubai interior design company | We Do Interior Design & Fit Out",
  description:
    "Bespoke interior design and fit-out for residences at Atlantis The Royal, Palm Jumeirah — premium marble finishes, turnkey delivery. Book a free consultation.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/royal-atlantis-dubai-interior-design-company',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
