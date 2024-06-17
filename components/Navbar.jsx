"use client";

import { Navbar } from "flowbite-react";
import { Flowbite } from "flowbite-react";

import React, { useEffect, useState } from "react";

export default function NavbarComponent() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setHasScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", checkScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const customTheme = {
    navbar: {
      brand: {
        base: "flex items-center text-[--navbar-text]",
      },
      link: {
        base: "block py-2 pr-4 pl-3 lg:p-0",
        active: {
          off: "border-b border-gray-100 text-[--navbar-text] uppercase font-semibold tracking-widest hover:bg-gray-50 lg:border-0 lg:hover:bg-transparent lg:hover:text-[--navbar-text-hover] duration-300 ease-in-out",
        },
      },
      collapse: {
        base: "w-full lg:block lg:w-auto",
        list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-sm lg:font-medium",
      },
      toggle: {
        base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 lg:hidden",
        icon: "text-[--navbar-text] h-6 w-6 shrink-0",
      },
    },
  };

  return (
    <div
      className={`z-50 fixed w-full top-0 mx-auto ${
        hasScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <Flowbite theme={{ theme: customTheme }}>
        <Navbar
          className={`md:py-6 ${
            hasScrolled ? "bg-[--navbar-primary]" : "bg-transparent"
          } `}
          onToggle={console.log("test")}
        >
          <Navbar.Brand href="#">
            <span className="self-center whitespace-nowrap text-xl font-semibold w-2">
              Longstay Achterhoek
            </span>
          </Navbar.Brand>
          <div className="flex lg:order-2 justify-end">
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#about">Over Ons</Navbar.Link>
            <Navbar.Link href="#suites">Suites</Navbar.Link>
            <Navbar.Link href="#">Faciliteiten</Navbar.Link>
            <Navbar.Link href="#">Zakelijk</Navbar.Link>
            <Navbar.Link href="#" className="border-b-0">
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </Flowbite>
    </div>
  );
}
