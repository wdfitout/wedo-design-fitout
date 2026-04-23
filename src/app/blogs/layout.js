import '../globals.css';

export const metadata = {
  title: "Our Blogs | We Do Interior Design & Fit-Out",
  description:
    "Explore expert insights, design trends and many more from WE DO Interior. Discover ideas for luxury interiors, fit-out, and modern living in Dubai.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/blogs',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="keywords" content="interior design blog Dubai, Dubai interior design ideas, luxury interior design tips, fit-out blog UAE, villa interior design ideas, commercial interior design trends, modern interior design inspiration, renovation tips Dubai, office interior design ideas, home décor blog Dubai, interior design company blog, UAE interior trends, WE DO Interior Design blog"></meta>
      <meta name="publisher" content="WE DO Interior Design and Fitout"></meta>
      <body>{children}</body>
    </html>
  );
}
