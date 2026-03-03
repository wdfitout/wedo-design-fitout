import '../globals.css';

export const metadata = {
  title: "5 Things to Consider When Designing Your Business Bay Apartment",
  description:
    "Discover 5 key tips for designing your Business Bay apartment with modern layouts, luxury finishes, and smart technology by WE DO Interior Design Dubai.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/business-bay-apartment-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="keywords" content="Business Bay apartment interior design, apartment interior design Dubai, modern apartment fit-out Business Bay, luxury apartment interior Dubai, Business Bay apartment renovation, turnkey apartment fit-out Dubai, smart apartment design Business Bay, high-end apartment interior Dubai"></meta>
      <meta name="publisher" content="WE DO Interior Design & Fitout">
      </meta><body>{children}</body>
    </html>
  );
}
