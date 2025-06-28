import '../globals.css';

export const metadata = {
  title: "Hotel Interior Design Dubai | We Do Interior",
  description:
    "Elevate your dining space design & experience with one of the best interior companies in Dubai. We do interior design & fit out!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/hotel-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
