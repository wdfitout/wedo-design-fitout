import '../globals.css';

export const metadata = {
  title: "Business bay office fit out Company in Dubai",
  description:
    "Discover our Business Bay Office Fit Out & Interior Design project, combining style and function. Transform your workspace with WE DO – start today",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/business-bay-office-fit-out',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
