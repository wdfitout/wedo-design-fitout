"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

const ContactForm = () => {
  const router = useRouter();
  const zohoGclidRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      /*
       * Zoho's sitewide zcga.js script populates this hidden field
       * when Google Ads attribution data is available.
       */
      const zcGad = zohoGclidRef.current?.value || "";

      /*
       * Capture useful attribution parameters as well.
       * These can later be saved in Zoho CRM by the API route.
       */
      const urlParams = new URLSearchParams(window.location.search);

      const payload = {
        ...formData,

        // Zoho / Google Ads attribution
        zc_gad: zcGad,

        // Additional attribution
        gclid: urlParams.get("gclid") || "",
        gbraid: urlParams.get("gbraid") || "",
        wbraid: urlParams.get("wbraid") || "",

        utm_source: urlParams.get("utm_source") || "",
        utm_medium: urlParams.get("utm_medium") || "",
        utm_campaign: urlParams.get("utm_campaign") || "",
        utm_term: urlParams.get("utm_term") || "",
        utm_content: urlParams.get("utm_content") || "",

        landing_page: window.location.href,
      };

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data?.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        setStatus("Message sent successfully.");

        /*
         * Redirect only after the API confirms success.
         */
        router.push("/thank-you");
      } else {
        const msg =
          data?.error ||
          `Failed to submit form (status ${res.status})`;

        setStatus(msg);
      }
    } catch (error) {
      console.error("Form submission error:", error);

      setStatus(
        error?.message ||
          "An error occurred. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-us"
      className="bg-[#f5ede5] py-12 px-4 sm:px-8 lg:px-16 text-black max-w-6xl mx-auto"
    >
      {/* Section Title */}
      <div className="flex flex-col items-center mb-10">
        <Image
          src="/images/sec-dvd.webp"
          alt="Divider"
          width={320}
          height={80}
          className="h-auto w-48 sm:w-64"
        />

        <h2 className="mt-10 mb-6 text-sm sm:text-xl tracking-widest font-conthrax text-center">
          CONTACT US
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-8"
      >
        {/* =============================================================
            Zoho CRM / Google Ads Hidden Attribution Field

            The sitewide zcga.js script fills this field automatically.
            ============================================================= */}

        <input
          ref={zohoGclidRef}
          type="hidden"
          id="zc_gad"
          name="zc_gad"
          defaultValue=""
        />

        {/* Left Column */}
        <div className="flex flex-col space-y-6 px-4">
          <div>
            <label
              htmlFor="contact-name"
              className="block mb-1 text-sm"
            >
              Your Name (required)
            </label>

            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              className="w-full border border-[#a16848] px-4 py-2 bg-transparent focus:outline-none"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block mb-1 text-sm"
            >
              Your Email (required)
            </label>

            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className="w-full border border-[#a16848] px-4 py-2 bg-transparent focus:outline-none"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="block mb-1 text-sm"
            >
              Mobile Number
            </label>

            <input
              id="contact-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              className="w-full border border-[#a16848] px-4 py-2 bg-transparent focus:outline-none"
              placeholder="05X-XXXXXXX"
            />
          </div>

          <div>
            <label
              htmlFor="contact-subject"
              className="block mb-1 text-sm"
            >
              Subject (required)
            </label>

            <input
              id="contact-subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border border-[#a16848] px-4 py-2 bg-transparent focus:outline-none"
              placeholder="Interior Design Inquiry"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col h-full justify-between space-y-4 px-4">
          <div>
            <label
              htmlFor="contact-message"
              className="block mb-1 text-sm"
            >
              Your Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={10}
              className="w-full border border-[#a16848] px-4 py-2 bg-transparent resize-none focus:outline-none"
              placeholder="Write your message here..."
            />
          </div>

          <div className="flex justify-start mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-2 border border-[#a16848] text-[#a16848] hover:bg-[#a16848] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RiSendPlaneFill />

              {isSubmitting ? "SENDING..." : "SEND EMAIL"}
            </button>
          </div>
        </div>
      </form>

      {/* Feedback Message */}
      {status && (
        <div className="text-center mt-6 text-sm text-[#a16848]">
          {status}
        </div>
      )}
    </section>
  );
};

export default ContactForm;