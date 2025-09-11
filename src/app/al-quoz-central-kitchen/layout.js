import '../globals.css';

export const metadata = {
  title: "Al Quoz, Central Kitchen Interior Design | We Do Interior",
  description:
    "Al Quoz Central Kitchen Interior by WE DO Interior Dubai—modern, smart, and fully-equipped kitchen interior design & fit-out solutions. Contact Us.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-quoz-central-kitchen',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
