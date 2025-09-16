import '../globals.css';

export const metadata = {
  title: "Dubai Hills Mall Facial Studio Interior Design Services",
  description:
    "Dubai hills mall facial studio interior design. WE DO offers beauty salon design & fit-out services for modern, elegant spaces. Call Now",
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
