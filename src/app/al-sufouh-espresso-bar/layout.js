import '../globals.css';

export const metadata = {
  title: "Al Sufouh, Espresso Bar Interior Design Dubai",
  description:
    "Explore Al Sufouh, Espresso Bar by WE DO Interior Design & Fitout, a modern commercial interior design project in Dubai blending style & luxury.",
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
