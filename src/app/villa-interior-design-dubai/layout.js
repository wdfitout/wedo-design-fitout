import '../globals.css';

export const metadata = {
  title: "Villa Interior Design Dubai - Modern Interior Design",
  description:
    "WE DO Interior Design & Fitout offers villa interior design Dubai with bespoke concepts, luxury execution, and turnkey villa fit-out solutions. Call now!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/villa-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
