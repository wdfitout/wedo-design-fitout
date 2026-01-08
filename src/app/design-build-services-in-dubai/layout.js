import '../globals.css';

export const metadata = {
  title: "Design build services in Dubai",
  description:
    "Design build services in Dubai by Dubai's top-tier interior design company",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/design-build-services-in-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
