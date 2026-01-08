import '../globals.css';

export const metadata = {
  title: " Villa Construction in Dubai - Complete Construction Execution",
  description:
    "Luxury villa construction in Dubai with complete construction execution, design & build, interior design, smart home systems, and turnkey solutions",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/complete-villa-construction-in-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
