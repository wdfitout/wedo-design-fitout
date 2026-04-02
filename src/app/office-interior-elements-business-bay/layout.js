import '../globals.css';

export const metadata = {
  title: " Essential Office Interior Elements in Business bay",
  description:
    "Explore essential office interior elements in Business Bay Dubai, including layout planning, lighting, and furniture to create modern workspaces.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/office-interior-elements-business-bay',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="keywords" content="office interior elements in Business Bay Dubai, office design elements Business Bay, office interior design Business Bay Dubai, office fit out Business Bay, commercial office design Dubai, workspace design Business Bay, office layout planning Dubai, modern office design Business Bay, office renovation Dubai, corporate office interior design Dubai"></meta>
      <body>{children}</body>
    </html>
  );
}
