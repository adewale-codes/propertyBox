"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <p className="text-sm text-center md:text-left">
          © 2025 <span className="font-bold">PropertyBox</span>. All Rights Reserved. Developed by{" "}
          <span className="font-bold">AdeCodes</span>
        </p>

        {/* Right: Nav Links */}
        <div className="flex space-x-6 text-sm">
          <Link href="/" className="hover:text-red-500 transition">Home</Link>
          <Link href="/About" className="hover:text-red-500 transition">About Us</Link>
          <Link href="/Portfolio" className="hover:text-red-500 transition">Portfolio</Link>
          <Link href="/Contact" className="hover:text-red-500 transition">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
