import '../globals.css';

export const metadata = {
  title: "Dubai Hills Mall Facial Studio | We Do Interior",
  description:
    "Dubai hills mall facial studio interior design",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/dubai-hills-mall-facial-studio',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
