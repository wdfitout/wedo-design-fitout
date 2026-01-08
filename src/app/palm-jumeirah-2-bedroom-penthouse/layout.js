import '../globals.css';

export const metadata = {
  title: "Palm Jumeirah 2 Bedroom Penthouse Interior Design",
  description:
    "Palm jumeirah 2 bedroom penthouse interior design Dubai. Get the best penthouse apartment interior design services by WEDO",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/palm-jumeirah-2-bedroom-penthouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
