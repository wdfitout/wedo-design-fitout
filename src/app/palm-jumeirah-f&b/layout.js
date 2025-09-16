import '../globals.css';

export const metadata = {
  title: "Palm Jumeirah F&B Interior Design & Fit Out",
  description:
    "Explore WE DO’s Palm Jumeirah F&B project. Luxury restaurant & café interior design with expert fit-out solutions for stylish, functional dining spaces.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/palm-jumeirah-f&b',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
