import '../globals.css';

export const metadata = {
  title: "Dubai Mall Restaurant Interior Design Dubai Project",
  description:
    "Discover Dubai Mall Restaurant by WE DO Interior Design & Fitout, blending modern elegance and comfort in a stunning dining experience in Downtown Dubai.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/dubai-mall-restaurant',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
