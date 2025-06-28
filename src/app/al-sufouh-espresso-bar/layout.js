import '../globals.css';

export const metadata = {
  title: "Al Sufouh, Espresso Bar Interior Design | We Do Interior",
  description:
    "Al Sufouh, espresso bar interior design",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/al-sufouh-espresso-bar',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
