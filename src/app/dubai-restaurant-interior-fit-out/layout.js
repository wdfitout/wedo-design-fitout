import '../globals.css';

export const metadata = {
  title: "Dubai Restaurant Interior Fit Out Project",
  description:
    "Dubai Restaurant Interior Fit Out services by WEDO.The leading restaurant interior design company in Dubai, United Arab Emirates.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/dubai-restaurant-interior-fit-out',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
