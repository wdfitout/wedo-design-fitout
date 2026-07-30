"use client";

import { FaPhoneAlt } from "react-icons/fa";

const CallButton = () => {
  const phoneNumber = "+971588075603";

  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11361089409/wchnCMOb_OsZEIHvsakq",
      });
    }
  };

  return (
    <a
      href={`tel:${phoneNumber}`}
      onClick={handleClick}
      aria-label="Call WE DO at +971 58 807 5603"
      title="Call WE DO"
      className="fixed bottom-[60px] right-10 z-[9999] flex items-center justify-center rounded-full bg-[#c38d90] px-6 py-6 font-bold text-white animate-pulse sm:px-4 sm:py-4 md:hidden"
    >
      <FaPhoneAlt
        aria-hidden="true"
        focusable="false"
        className="text-2xl"
      />
    </a>
  );
};

export default CallButton;