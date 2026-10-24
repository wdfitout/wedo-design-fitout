import '../globals.css';

export const metadata = {
  title: "Bleu Tower Penthouse Interior Design | WE DO Interior Design Dubai",
  description:
    "Bleu Tower Penthouse Interior Design by WE DO Interior Design Dubai. Explore our portfolio of luxurious interior design projects.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/bleu-tower-penthouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
