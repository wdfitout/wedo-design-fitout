import '../globals.css';

export const metadata = {
  title: "Hotel Interior Design Dubai - Hospitality Interior Design",
  description:
    "Luxury Hotel interior design Dubai by WE DO. Best interior design company for hotels in UAE. Call now to start your project!",
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
