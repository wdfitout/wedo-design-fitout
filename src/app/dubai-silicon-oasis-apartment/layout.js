import '../globals.css';

export const metadata = {
  title: "Dubai Silicon Oasis Apartment interior design - We Do Interior",
  description:
    "Dubai Silicon Oasis Apartment Interior Design by WE DO. Our interior design & fit-out services make us a top choice for interior design in Dubai.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/dubai-silicon-oasis-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
