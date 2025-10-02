import '../globals.css';

export const metadata = {
  title: "Dubai office Interior Design and Fit-out Company in UAE",
  description:
    "WEDO delivers expert Dubai office interior design, fit-out, renovation & build services with luxury, modern & classic styles, custom furniture & décor.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/dubai-office-interior',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
