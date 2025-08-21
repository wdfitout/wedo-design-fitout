import '../globals.css';

export const metadata = {
  title: "Cafe Interior Design Dubai - Coffee Shop Design",
  description:
    "We DO Interior have expert cafe interior designers who can create the best cafe interior design Dubai. Visit us for your Cafe project",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/apartment-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
