import "../globals.css";

export const metadata = {
  title: "Royal Atlantis Dubai Interior Design Company | Tailored Spaces",
  description: "Discover premium interior design services at Royal Atlantis Dubai with WeDo Interior. We craft elegant spaces that redefine luxury living. Contact us today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

