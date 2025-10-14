import '../globals.css';

export const metadata = {
  title: "Address Beach Resort Apartment Interior Design Project",
  description:
    "Experience the Address Beach Resort Apartment by WE DO Interior, featuring luxurious beachfront modern apartment Interior design in Dubai. Contact Now.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/address-beach-resort-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
