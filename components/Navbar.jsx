"use client";

import { Button, Navbar } from "flowbite-react";
import { Flowbite } from "flowbite-react";

export default function NavbarComponent() {
  const customTheme = {
    button: {
      color: {
        success:
          "border border-transparent bg-[--navbar-primary] outline outline-2 text-white focus:ring-2 focus:ring-[--color-bg] enabled:hover:bg-[--navbar-button-hover]",
      },
    },
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
    <div className="z-50 fixed w-full top-0 mx-auto shadow-md">
      <Flowbite theme={{ theme: customTheme }}>
        <Navbar className="bg-[--navbar-primary]">
          <Navbar.Brand href="https://www.longstayachterhoek.nl">
            <span className="self-center whitespace-nowrap text-xl font-semibold ">
              Longstay Achterhoek
            </span>
          </Navbar.Brand>
          <div className="flex lg:order-2 justify-end">
            <Button color="success" className="lg:mr-0 mr-4">
              Boek Direct
            </Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#">Over Ons</Navbar.Link>
            <Navbar.Link href="#">Suites</Navbar.Link>
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
