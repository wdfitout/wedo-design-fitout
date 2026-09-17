import '../globals.css';

export const metadata = {
  title: "About Us - We Do Interior Design & Fit Out",
  description:
    "Best interior design company in Dubai. We Do Interior Design. We are offering professional services of Interior Design and fitout. Contact us today!",
  metadataBase: new URL('https://wedointerior.ae/'),

  publisher: "WE DO Interior Design and Fitout",
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: "About Us - We Do Interior Design & Fit Out",
    description:
      "Best interior design company in Dubai. We Do Interior Design. We are offering professional services of Interior Design and fitout. Contact us today!",
    url: 'https://wedointerior.ae/about-us',
    siteName: "WE DO Interior Design & Fit-Out",
    type: "website",
    images: [
      {
        url: "https://wedointerior.ae/images/01-living-03.jpg",
        width: 1200,
        height: 630,
        alt: "WE DO Interior Design and Fit-Out Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - We Do Interior Design & Fit Out",
    description:
      "Best interior design company in Dubai. We Do Interior Design. We are offering professional services of Interior Design and fitout. Contact us today!",
    images: ["https://wedointerior.ae/images/01-living-03.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}