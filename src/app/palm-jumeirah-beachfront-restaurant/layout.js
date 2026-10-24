import '../globals.css';

export const metadata = {
  title: "Palm Jumeirah Beachfront Restaurant Design | WE DO Interior Design Dubai",
  description:
    "Palm Jumeirah Beachfront Restaurant Design | WE DO Interior Design Dubai",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/palm-jumeirah-beachfront-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
