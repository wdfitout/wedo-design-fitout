import '../globals.css';

export const metadata = {
  title: "Palm Jumeirah Apartment Interior Design & Fit Out",
  description:
    "Upgrade your Palm Jumeirah apartment with WE DO Fitout. Luxury interior design & fitout crafted for timeless comfort—contact us today.",
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
