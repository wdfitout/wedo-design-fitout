import '../../globals.css';

export const metadata = {
  title: "Luxury Apartment Interior Design In Palm Jumeirah- WeDo Interior",
  description: "Find luxury apartment interior design in Palm Jumeirah by WeDo Interior. We craft elegant, bespoke spaces tailored to your exclusive lifestyle, needs and vision.",
alternates: {
    canonical: "https://www.wedointerior.ae/home-interior-design-dubai/luxury-apartment-interior-design-in-palm-jumeirah",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}