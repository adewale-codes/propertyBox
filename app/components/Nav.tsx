"use client";

import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string): string =>
    pathname === path
      ? "bg-red-600 text-white px-4 py-2 rounded transition"
      : "text-green-900 hover:bg-red-600 hover:text-white px-4 py-2 rounded transition";

  return (
    <nav>
      <div className="bg-white grid lg:flex lg:justify-between lg:px-28 px-4 py-5 h-24 items-center">
        <Link href="/">
          <div className="text-green-900 font-bold text-xl">PropertyBox</div>
        </Link>

        {/* Desktop Links */}
        <div className="justify-self-start lg:pl-16 hidden lg:flex items-center justify-center gap-2 md:gap-8">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/About" className={linkClass("/About")}>About Us</Link>
          <Link href="/Services" className={linkClass("/Services")}>Services</Link>
          <Link href="/Portfolio" className={linkClass("/Portfolio")}>Portfolio</Link>
          <Link href="/Contact" className={linkClass("/Contact")}>Contact</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden flex justify-self-end cursor-pointer -mt-12">
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-black" onClick={() => setIsOpen(false)} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-black" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed z-50 top-0 left-0 h-screen w-3/4 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-5 p-6 pt-20 text-lg">
          <Link href="/" className={linkClass("/")} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/About" className={linkClass("/About")} onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/Services" className={linkClass("/Services")} onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/Portfolio" className={linkClass("/Portfolio")} onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="/Contact" className={linkClass("/Contact")} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
