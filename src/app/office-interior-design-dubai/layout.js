import '../globals.css';

export const metadata = {
  title: " Office Interior Design Dubai - Interior Fitout Company",
  description:
    "WE DO Interior offers office interior design and fit-out services in Dubai, with customized workspaces in DIFC,Dubai Marina, Business Bay etc . Call Now",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/apartment-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
