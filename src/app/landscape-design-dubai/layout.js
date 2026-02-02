import '../globals.css';

export const metadata = {
  title: "Landscape Design Dubai- Landscape Company in Dubai",
  description:
    "Enhance your outdoors with landscape design in Dubai by WE DO. We offer villa landscaping, garden design, and outdoor solutions across Dubai. Call Now.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/landscape-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="keywords" content="landscape design dubai, landscape company in dubai, garden design dubai, luxury landscape designers dubai">
</meta>
      <body>{children}</body>
    </html>
  );
}
