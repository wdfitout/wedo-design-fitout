import '../../globals.css';

export const metadata = {
  title: "Xaima Interior Design Dubai 2024 - We Do Interiors",
  description: "Experience stunning setting. Xaima Restaurant interior design, crafted by the professional Interior Design team of We Do Interior Design Company Dubai.",
alternates: {
    canonical: "https://www.wedointerior.ae/restaurant-interior-design-dubai/modern-restaurant-interior-design-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}