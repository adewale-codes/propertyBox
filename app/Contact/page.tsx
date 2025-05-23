"use client";

import { useRef, useState } from "react";
// switch import to the new package
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] =
    useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      )
      .then(
        () => setStatus("success"),
        () => setStatus("error")
      );
  };

  return (
    <section>
      {/* 1. Heading Block */}
      <div className="bg-white py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">How to Reach Us?</h2>
        <p className="mt-2 text-gray-600">
          We are willing to hear from you. Contact us.
        </p>
      </div>

      {/* 2. Banner with Blurred Map Background */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        {/* Blurred full-bleed background */}
        <Image
          src="/images/map.png"
          alt="map"
          fill
          unoptimized
          className="object-cover filter blur-sm opacity-50"
        />
        {/* White-wash overlay */}
        <div className="absolute inset-0 bg-white/20" />

        {/* Foreground content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center md:flex-row items-center gap-12">
          {/* Circular map */}
          <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0005539637746!2d7.4794627724462295!3d9.063712588449885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b54db2ba53b%3A0xbf6959abb4f5e978!2sIbrahim%20Abacha%20Estate!5e0!3m2!1sen!2suk!4v1748000081094!5m2!1sen!2suk"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Office info */}
          <div className="text-gray-700 text-sm space-y-1 text-left">
            <p className="font-semibold">Head Office</p>
            <p>
              43, Suez crescent, Ibrahim Abacha estate, Wuse Zone 4, Abuja,
              FCT
            </p>
            <p>Nigeria</p>
            <p>
              Phone:{" "}
              <a href="tel:+2348088888888" className="text-red-600">
                +234-808-888-8888
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:support@propertybox.com.ng"
                className="text-red-600"
              >
                support@propertybox.com.ng
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* 3. Drop Your Message Form */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Drop Your Message
          </h2>
          <p className="mt-1 text-gray-600">We would love to hear from you.</p>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left Column */}
          <div className="space-y-4">
            {[
              { label: "Name *", name: "user_name", type: "text", required: true },
              { label: "Email *", name: "user_email", type: "email", required: true },
              { label: "Phone", name: "user_phone", type: "tel", required: false },
              { label: "Company Name", name: "company", type: "text", required: false },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                required
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex items-start md:items-end">
              <button
                type="submit"
                disabled={status === "sending"}
                className={`bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition ${
                  status === "sending" ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Sent!"
                  : status === "error"
                  ? "Error"
                  : "Submit Message"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
