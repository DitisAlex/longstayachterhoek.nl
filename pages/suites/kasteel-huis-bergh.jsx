import { Carousel, Button } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import NavbarComponent from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import logo from "../../public/logo.jpg";

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
} from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { IoMdResize } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { BsSafeFill } from "react-icons/bs";

export default function KasteelHuisBergh() {
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
            Kasteel Huis Bergh
          </h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-8">
        <div className="col-span-4">
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
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Inspiratie</h2>
            <p className="py-2 text-[--color-text]">
              Dit appartement ademt de sfeer van een van de mooiste kastelen die
              Nederland rijk is, Kasteel Huis Bergh. Huis Bergh is een kasteel
              en museum in de stad 's-Heerenberg in de gemeente Montferland, in
              de Nederlandse provincie Gelderland. Huis Bergh was het stamslot
              van de graven van Bergh. Het Land van den Bergh was vóór 1486 een
              bannerij en vanaf 1486 (rijks-)graafschap Bergh. Huis Bergh is de
              grootste waterburcht in Nederland.
              <br />
              <br />
              Huis Bergh is van de 12e eeuw tot en met de 20e eeuw bewoond
              geweest. De verschillende heren en graven Van den Bergh hebben een
              belangrijke rol gespeeld in de geschiedenis van het gebied en
              sommigen hebben zelfs op landelijk niveau geschiedenis geschreven.
              In de Tachtigjarige Oorlog werd een belangrijke stempel gedrukt op
              de Berghse geschiedenis door Willem IV graaf Van den Bergh. Het
              kasteel Huis Bergh kent een bewogen bouwgeschiedenis. Sinds de 12e
              eeuw is het kasteel al vele malen van uiterlijk veranderd en
              hebben er talloze addities plaatsgevonden. Ook is het al twee keer
              afgebrand geweest, waarvan de laatste keer nog vrij recent: in
              1939.
            </p>
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
