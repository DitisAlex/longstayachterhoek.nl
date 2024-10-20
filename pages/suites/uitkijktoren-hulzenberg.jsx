import { Carousel, Button } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import NavbarComponent from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import logo from "../../public/hd/uitkijktoren4k.jpg";

import {
  FaWifi,
  FaShower,
  FaUmbrellaBeach,
  FaBed,
  FaSmokingBan,
  FaChair,
  FaToilet,
  FaCoffee,
  FaCalendarWeek,
} from "react-icons/fa";
import { PiTelevisionDuotone } from "react-icons/pi";
import {
  TbToolsKitchen3,
  TbMassage,
  TbAirConditioning,
  TbHanger,
} from "react-icons/tb";
import {
  MdPets,
  MdForest,
  MdTableRestaurant,
  MdCleaningServices,
  MdKingBed,
} from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { IoMdResize } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { BsSafeFill } from "react-icons/bs";

import img1 from "../../public/impressie/uitkijktoren/image00001.jpeg";
import img2 from "../../public/impressie/uitkijktoren/image00002.jpeg";
import img3 from "../../public/impressie/uitkijktoren/image00003.jpeg";
import img4 from "../../public/impressie/uitkijktoren/image00004.jpeg";
import img5 from "../../public/impressie/uitkijktoren/image00005.jpeg";

export default function UitkijktorenHulzenberg() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/30 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          objectFit="cover"
          src={logo}
          alt="airbnb"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2 text-white text-2xl md:text-4xl font-semibold">
            Uitkijktoren Hulzenberg
          </h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-8">
        <div className="col-span-4">
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Prijzen</h2>
            <div className="text-[--color-text]">
              € 199,00 per nacht(exclusief toeristenbelasting) booking min. 2
              nachten.
            </div>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Beschrijving</h2>
            <div className="text-[--color-text]">
              Kenmerken van dit appartement:
              <ul>
                <li>
                  • <span className="font-semibold">Ruime woonruimte: </span>
                  Door de aanwezige ruimte kunt u genieten van een gezellige
                  woonkamer/keuken met aangrenzend een eigen terras met uitzet
                  op het Montferlandse bos.
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Volledig uitgeruste keuken:
                  </span>{" "}
                  Bereid uw favoriete maaltijden met gemak dankzij onze moderne
                  keukenfaciliteiten met o.a. vaatwasser, combimagnetron/oven,
                  waterkoker en koffiezetapparaat.
                </li>
                <li>
                  • <span className="font-semibold">Privé badkamer:</span> Uw
                  comfort is onze prioriteit, daarom beschikt ons appartement
                  over een eigen badkamer voor uw gemak. Deze beschikt over een
                  inloopdouche, een dubbele wastafel, design radiator en
                  haarfohn. Met een separaat toilet.
                </li>
                <li>
                  • <span className="font-semibold">Gratis Wi-Fi:</span> Blijf
                  verbonden met uw dierbaren en de rest van de wereld met ons
                  gratis draadloos internet.
                </li>
                <li>
                  • <span className="font-semibold">Centrale locatie:</span> Ons
                  appartement bevindt zich vlakbij belangrijke uitvalswegen. Op
                  loopafstand van het Montferlandse bos, het busstation, een
                  supermarkt en vele eetgelegenheden (inclusief dagelijks
                  ontbijt vanaf 07:00 bij BROODS).
                </li>
              </ul>
            </div>
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
                <span>55 m²</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <FaBed className="text-2xl" />
                <span>Twee eenpersoonsbedden</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <TbToolsKitchen3 className="text-2xl" />
                <span>Kitchenette</span>
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
                  <TbAirConditioning className="text-2xl" />
                  <span>Airconditioning</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <FaUmbrellaBeach className="text-2xl" />
                  <span>Terras</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <MdTableRestaurant className="text-2xl" />
                  <span>Bureau & eettafel</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <FaChair className="text-2xl" />
                  <span>Zithoek met salontafel</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <FaShower className="text-2xl" />
                  <span>Badkamer met inloopdouche</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <MdKingBed className="text-2xl" />
                  <span>Slaapbank</span>
                </li>
              </ul>
              <ul>
                <li className="flex items-center space-x-2 py-1">
                  <TbToolsKitchen3 className="text-3xl" />
                  <span>
                    Kitchenette (afwasmachine / combi oven / koelkast & vriezer)
                  </span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <FaToilet className="text-2xl" />
                  <span>Toilet</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <FaCoffee className="text-2xl" />
                  <span>Koffie- & theefaciliteiten</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <BsSafeFill className="text-2xl" />
                  <span>Kluisje</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <TbHanger className="text-2xl" />
                  <span>Garderobe</span>
                </li>
                <li className="flex items-center space-x-2 py-1">
                  <FaCalendarWeek className="text-2xl" />
                  <span>Wekelijkse linnengoed</span>
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
                <span>Beddengoed wordt wekelijks vervangen</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <MdCleaningServices className="text-2xl" />
                <span>Een wekelijkse schoonmaak</span>
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
                <Image src={img1} alt="..." className="" />
                <Image src={img2} alt="..." className="" />
                <Image src={img3} alt="..." className="" />
                <Image src={img4} alt="..." className="" />
                <Image src={img5} alt="..." className="" />
              </Carousel>
            </div>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Inspiratie</h2>
            <p className="py-2 text-[--color-text]">
              Ons appartement &#39;de Uitkijktoren ademt de sfeer van een van de
              prachtige bezienswaardigheden die onze regio rijk is. Deze 21
              meter hoge uitkijktoren ligt in het Bergerbos te Stokkum. De
              Hulzenberg is gebouwd in opdracht van de gemeente en gemaakt van
              het hout dat uit het Bergerbos komt. Sinds 2015 is de Hulzenberg
              ook toegankelijk voor toeristen. <br />
              <br /> De Hulzenberg is een mooie stop als je door het prachtige
              Bergerbos aan het wandelen bent. Een kilometer van de uitkijktoren
              is er een parkeerplaats, waardoor de Hulzenberg via grote en
              kleine wandelroutes bereikbaar is. De toren is 21 meter hoog en
              bevindt zich meer dan 100 meter boven NAP. Dit zorgt ervoor dat er
              een fantastisch uitzicht is. Boven op de toren staan de gebieden
              aangegeven waar u naar kijkt. Op deze manier ziet u van bovenaf
              wat het mooie Montferland, de Achterhoek en zelfs Duitsland te
              bieden heeft. De uitkijktoren is opgenomen in diverse wandelroutes
              in het Bergherbos. Alleen al het wandelen door Montferland is
              prachtig. De route naar de uitkijktoren is goed te doen. Eenmaal
              boven ben je gauw even stil om daarna te genieten van het
              geweldige uitzicht.
            </p>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2">
          <div className="py-4 shadow-md p-4 border border-gray-300 rounded-xl mb-4">
            <h2 className="text-2xl font-semibold pt-2 flex justify-center">
              Check Beschikbaarheid
            </h2>
            <p className="text-[--color-text] py-2">
              Heeft u interesse om particulier hier te verblijven? Neem dan
              contact met ons.
            </p>
            <Flowbite theme={{ theme: customTheme }}>
              <Link href="/#contact">
                <Button
                  color="success"
                  className="font-semibold tracking-wider"
                >
                  Contactformulier
                </Button>
              </Link>
              <p className="text-[--color-text] py-2 pt-6">
                Wilt u echter zakelijk verblijven? Klik dan hier.
              </p>
              <Link href="/#zakelijk">
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
