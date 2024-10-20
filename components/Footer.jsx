"use client";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "flowbite-react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";

import logo from "../public/logo_horizontal.png";

export default function FooterComponent() {
  return (
    <div className="bg-[--navbar-primary]">
      <Footer container className="bg-[--navbar-primary]">
        <div className="w-full max-w-[1240px] m-auto">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="flex justify-center">
              <Link href="/">
                <Image src={logo} width={200} height={200} alt="Logo" />
              </Link>
            </div>
            <Footer.LinkGroup className="text-white uppercase">
              <Footer.Link href="#">Home</Footer.Link>
              <Footer.Link href="#about">Over Ons</Footer.Link>
              <Footer.Link href="#suites">Suites</Footer.Link>
              <Footer.Link href="#faciliteiten">Faciliteiten</Footer.Link>
              <Footer.Link href="#zakelijk">Zakelijk</Footer.Link>
              <Footer.Link href="#contact">Contact</Footer.Link>
              <Footer.Link href="/privacy">Privacy Policy</Footer.Link>
              <Footer.Link href="/tos">Terms of Services</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between ">
            <Footer.Copyright
              href="#"
              by="Longstay Achterhoek"
              year={2024}
              className="text-white"
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="https://instagram.com/longstayachterhoek"
                className="text-white"
                icon={FaInstagram}
              />
              <Footer.Icon
                href="https://www.facebook.com/profile.php?id=61557442225259"
                className="text-white"
                icon={FaFacebookF}
              />
              {/* <Footer.Icon
                href="https://www.booking.com"
                className="text-white"
                icon={TbBrandBooking}
              /> */}
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
