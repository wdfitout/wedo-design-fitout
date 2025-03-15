import "../globals.css";

export const metadata = {
  title: "Commercial Interior Design Dubai | Modern & Functional",
  description: "Explore modern office interior design and fit-out projects in Dubai by WeDo Interior. We create functional workspaces for premium businesses. Contact us today!",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

