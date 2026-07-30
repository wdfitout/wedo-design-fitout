"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappNumber = "971588075603";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleClick = () => {
    // Fire Google Ads conversion for WhatsApp click
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11361089409/3MTICMCb_OsZEIHvsakq",
      });
    }
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Chat with WE DO on WhatsApp"
      title="Chat with WE DO on WhatsApp"
      className="fixed bottom-[60px] left-5 z-[9999] flex items-center justify-center rounded-full bg-green-500 px-6 py-6 text-white transition-colors hover:bg-green-600 sm:px-4 sm:py-4 animate-pulse"
    >
      <FaWhatsapp
        aria-hidden="true"
        focusable="false"
        className="text-xl"
      />
    </a>
  );
};

export default WhatsAppButton;