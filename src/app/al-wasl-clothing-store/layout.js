import '../globals.css';

export const metadata = {
  title: "Al Wasl, Clothing Store Interior Design Dubai",
  description:
    "Al Wasl clothing store interior design by WE DO Interior & Fitout blends luxury, style & function. Expert retail & boutique design services in Dubai.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-wasl-clothing-store',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
