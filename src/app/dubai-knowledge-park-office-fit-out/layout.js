import '../globals.css';

export const metadata = {
  title: "Dubai Knowledge Park Office Fit Out | We Do Interior",
  description:
    "Dubai knowledge park office fit out",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/dubai-knowledge-park-office-fit-out',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
