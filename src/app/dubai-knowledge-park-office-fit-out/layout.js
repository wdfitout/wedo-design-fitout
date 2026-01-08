import '../globals.css';

export const metadata = {
  title: "Dubai Knowledge Park Office Fit Out Dubai",
  description:
    "Dubai knowledge park office fit out Company in Dubai.WE DO, a top fit-out company in Dubai, delivers expert interior solutions. Call Now",
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
