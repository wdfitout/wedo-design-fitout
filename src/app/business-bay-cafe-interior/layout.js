import '../globals.css';

export const metadata = {
  title: "Business Bay Cafe interior Design in Dubai",
  description:
    "As a Business Bay Cafe Interior Design Company in Dubai, WE DO specialize in crafting bespoke interiors that reflect the unique personality and style. ",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/business-bay-cafe-interior',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
