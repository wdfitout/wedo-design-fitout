import '../globals.css';

export const metadata = {
  title: "Villa Projects | We Do Interior Design & Fit Out",
  description:
    "Villa interior design projects Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/villa-projects',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
