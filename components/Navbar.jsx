import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";

import logo from "../public/logo_horizontal.png";
export default function NavbarComponent() {
  const [toggleNav, setToggleNav] = useState(false);
  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setHasScrolled(window.scrollY > 150);
    };

    if (
      window.location.pathname === "/" ||
      window.location.pathname.startsWith("/suites/")
    ) {
      window.addEventListener("scroll", checkScroll);
    } else {
      setHasScrolled(true);
    }

    // Clean up the event listener when the component is unmounted
    return () => {
      if (window.location.pathname === "/") {
        window.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  return (
    <div
      className={`z-50 h-30 fixed w-full top-0 ${
        hasScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div
        className={`text-[--navbar-text] flex justify-between items-center w-full h-full px-6 mr-4 xl:px-44 2xl:px-64 transition duration-250 ease-in ${
          hasScrolled ? "bg-[--navbar-primary]" : "bg-transparent"
        }`}
      >
        <Link href="/" className="md:block flex flex-grow justify-center">
          <Image
            src={logo}
            width={250}
            height={250}
            alt="Logo"
            className="mt-2"
          />
        </Link>
        <ul className="hidden lg:flex">
          <li className="ml-10 text-l tracking-widest font-semibold uppercase hover:underline decoration-2 duration-300 ease-in-out">
            <Link href="/suites">Suites</Link>
          </li>
          <li className="ml-10 text-l tracking-widest font-semibold uppercase hover:underline decoration-2 duration-300 ease-in-out">
            <Link href="/zakelijk">Zakelijk</Link>
          </li>
          <li className="ml-10 text-l tracking-widest font-semibold uppercase hover:underline decoration-2 duration-300 ease-in-out">
            <Link href="/faciliteiten">Faciliteiten</Link>
          </li>
          <li className="ml-10 text-l tracking-widest font-semibold uppercase hover:underline decoration-2 duration-300 ease-in-out">
            <Link href="/tijdelijke-woonruimte">Tijdelijke Woonruimte</Link>
          </li>
          <li className="ml-10 text-l tracking-widest font-semibold uppercase hover:underline decoration-2 duration-300 ease-in-out">
            <Link href="/about">Over Ons</Link>
          </li>
          <li className="ml-10 text-l tracking-widest font-semibold uppercase hover:underline decoration-2 duration-300 ease-in-out">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div onClick={handleToggleNav} className="lg:hidden p-3 cursor-pointer">
          <AiOutlineMenu size={20} />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={
          toggleNav
            ? "lg:hidden fixed right-0 top-0 w-full h-screen bg-black/40 ease-in-out duration-150"
            : ""
        }
      >
        <div
          className={
            toggleNav
              ? "fixed right-0 top-0 w-[65%] sm:w-[65%] h-screen bg-[--color-bg] p-4 ease-in-out duration-500"
              : "fixed right-[-100%] top-0 h-screen p-10 ease-in duration-300"
          }
        >
          <div className="flex justify-end w-full">
            <div className="p-3 mr-4 cursor-pointer">
              <AiOutlineClose size={20} onClick={handleToggleNav} />
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              <li className="border-b border-gray-300 py-2 text-l tracking-widest font-semibold uppercase hover:text-[--navbar-text-hover] duration-300 ease-in-out">
                <Link href="/" onClick={() => setToggleNav(false)}>
                  Home
                </Link>
              </li>
              <li className="border-b border-gray-300 py-2 text-l tracking-widest font-semibold uppercase hover:text-[--navbar-text-hover] duration-300 ease-in-out">
                <Link href="/suites" onClick={() => setToggleNav(false)}>
                  Suites
                </Link>
              </li>
              <li className="border-b border-gray-300 py-2 text-l tracking-widest font-semibold uppercase hover:text-[--navbar-text-hover] duration-300 ease-in-out">
                <Link href="/zakelijk" onClick={() => setToggleNav(false)}>
                  Zakelijk
                </Link>
              </li>
              <li className="border-b border-gray-300 py-2 text-l tracking-widest font-semibold uppercase hover:text-[--navbar-text-hover] duration-300 ease-in-out">
                <Link href="/faciliteiten" onClick={() => setToggleNav(false)}>
                  Faciliteiten
                </Link>
              </li>
              <li className="border-b border-gray-300 py-2 text-l tracking-widest font-semibold uppercase hover:text-[--navbar-text-hover] duration-300 ease-in-out">
                <Link
                  href="/tijdelijke-woonruimte"
                  onClick={() => setToggleNav(false)}
                >
                  Tijdelijke Woonruimte
                </Link>
              </li>
              <li className="border-b border-gray-300 py-2 text-l tracking-widest font-semibold uppercase hover:text-[--navbar-text-hover] duration-300 ease-in-out">
                <Link href="/about" onClick={() => setToggleNav(false)}>
                  Over Ons
                </Link>
              </li>
              <li className="py-2 text-l tracking-widest font-semibold uppercase hover:text-[--navbar-text-hover] duration-300 ease-in-out">
                <Link href="/contact" onClick={() => setToggleNav(false)}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="pt-48">
              <p className="uppercase tracking-widest font-semibold text-l">
                Volg ons op
              </p>
              <div className="flex items-center justify-around my-4 w-full sm:w-[80%]">
                <Link href="https://instagram.com/longstayachterhoek">
                  <div className="rounded-full bg-[--navbar-primary] text-white shadow-md shadow-gray-400 p-4">
                    <FaInstagram aria-label="Click here to see our instagram" />
                  </div>
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61557442225259">
                  <div className="rounded-full bg-[--navbar-primary] text-white shadow-md shadow-gray-400 p-4">
                    <FaFacebookF aria-label="Click here to see our facebook" />
                  </div>
                </Link>
                {/* <Link href="https://www.booking.com">
                  <div className="rounded-full bg-[--navbar-primary] text-white shadow-md shadow-gray-400 p-4">
                    <TbBrandBooking />
                  </div>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
