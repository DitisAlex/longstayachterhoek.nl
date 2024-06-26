import { Carousel, Button } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import NavbarComponent from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo.jpg";

import {
  FaWifi,
  FaShower,
  FaUmbrellaBeach,
  FaBed,
  FaSmokingBan,
} from "react-icons/fa";
import { PiTelevisionDuotone } from "react-icons/pi";
import { TbToolsKitchen3, TbMassage } from "react-icons/tb";
import { MdPets, MdForest } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { IoMdResize } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";

export default function HuisBergh() {
  const customTheme = {
    button: {
      color: {
        success:
          "w-full border border-transparent bg-[--navbar-primary] outline outline-2 text-white focus:ring-2 focus:ring-[--color-bg] enabled:hover:bg-[--navbar-button-hover]",
      },
    },
  };

  return (
    <div>
      <NavbarComponent />
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          objectFit="cover"
          src={logo}
          alt="airbnb"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2 text-white text-2xl md:text-4xl font-semibold">
            Huis Bergh
          </h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-8">
        <div className="col-span-4">
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Beschrijving</h2>
            <p className="text-[--color-text]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              eius, ea similique qui dignissimos nemo quod cupiditate sunt
              quidem incidunt vel ullam reiciendis praesentium maxime quae
              repellendus doloribus, voluptates quos.
            </p>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Kamer Kenmerken</h2>
            <ul className="mx-2">
              <li className="flex items-center space-x-2 py-1">
                <FaHouse className="text-2xl" />
                <span>Suite</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <IoMdResize className="text-2xl" />
                <span>65 m²</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <FaBed className="text-2xl" />
                <span>Kingsize Bed</span>
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Kamer Voorzieningen</h2>
            <div className="grid grid-cols-2 gap-4 mx-2">
              <ul>
                <li className="flex items-center space-x-2 py-1">
                  <FaWifi className="text-2xl" />
                  <span>Gratis WiFi</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <PiTelevisionDuotone className="text-2xl" />
                  <span>Flatscreen-tv</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <TbToolsKitchen3 className="text-2xl" />
                  <span>Eigen kitchenette</span>
                </li>
              </ul>
              <ul>
                <li className="flex items-center space-x-2 py-1">
                  <FaShower className="text-2xl" />
                  <span>Eigen badkamer</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <FaUmbrellaBeach className="text-2xl" />
                  <span>Balkon</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Beleid</h2>
            <ul className="mx-2">
              <li className="flex items-center space-x-2 py-1">
                <MdPets className="text-2xl" />
                <span>Huisdieren zijn toegestaan.</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <FaSmokingBan className="text-2xl" />
                <span>
                  Roken is niet toegestaan binnen de kamers, maar wel op het
                  terras.
                </span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <FaBed className="text-2xl" />
                <span>Beddengoed wordt wekelijks vervangen om 9:00</span>
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Nabijgelegen Attracties</h2>
            <ul className="mx-2">
              <li className="flex items-center space-x-2 py-1">
                <MdForest className="text-2xl" />
                <span>Diverse wandel- en fietsroutes door het Bergherbos.</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <IoRestaurant className="text-2xl" />
                <span>
                  Authentieke aziatische A La Carte gerechten bij Chinees
                  restaurant Sin Chen.
                </span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <TbMassage className="text-2xl" />
                <span>
                  Ontspanning en recreatie bij park Landal Stroombroek.
                </span>
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Impressie</h2>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel slideInterval={5000}>
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                  alt="..."
                />
              </Carousel>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2">
          <div className="py-4 shadow-md p-4 border border-gray-300 rounded-xl">
            <h2 className="text-2xl font-semibold pt-2 flex justify-center">
              Boek Direct
            </h2>
            <p className="text-[--color-text] py-2">
              Heeft u interesse om particulier te verblijven in Huis Bergh?
              Controleer dan de beschikbaarheid.
            </p>
            <Flowbite theme={{ theme: customTheme }}>
              <Link href="https://www.booking.com/">
                <Button
                  color="success"
                  className="font-semibold tracking-wider"
                >
                  Check Beschikbaarheid
                </Button>
              </Link>
              <p className="text-[--color-text] py-2 pt-6">
                Wilt u echter zakelijk verblijven? Klik dan hier.
              </p>
              <Link href="http://localhost:3000/#zakelijk">
                <Button
                  color="success"
                  className="font-semibold tracking-wider"
                >
                  Zakelijk Verblijf
                </Button>
              </Link>
            </Flowbite>
          </div>
        </div>
      </div>
    </div>
  );
}
