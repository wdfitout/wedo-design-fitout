import '../globals.css';

export const metadata = {
  title: "Villa Construction Dubai | We Do Interior Design & Fit Out",
  description:
    "Villa construction Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/villa-construction-dubai/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
