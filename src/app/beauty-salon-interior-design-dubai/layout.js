import "../globals.css";

export const metadata = {
  title: "Beauty Salon Interior Design Dubai | Tailored Elegance",
  description: "Elevate your beauty salon with tailored interior design solutions in Dubai. We craft elegant and inviting spaces that leave a lasting impression on clients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
