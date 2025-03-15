import '../../globals.css';

export const metadata = {
  title: "Facial Studio | Design & Fitout Project | Dubai Hills Mall, Dubai, UAE",
  description: "The highly professional team of WeDo Design & Fitout, crafted luxury facial studion in Dubai hills mall, Dubai, UAE",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}