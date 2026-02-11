import '../globals.css';

export const metadata = {
  title: " Latest Office Interior Design Trends in Business Bay 2026",
  description:
    "Explore the latest office interior design trends in Business Bay for 2026, including flexible layouts, biophilic design & luxury office fit-out solutions.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/office-interior-design-trends-in-business-bay',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>{children}</body>
      
    </html>
  );
}
