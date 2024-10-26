import { Carousel, Button } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import NavbarComponent from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import logo from "../../public/hd/torenmolen4k.jpg";

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

import img1 from "../../public/impressie/torenmolen/image00001.jpeg";
import img2 from "../../public/impressie/torenmolen/image00002.jpeg";
import img3 from "../../public/impressie/torenmolen/image00003.jpeg";
import img4 from "../../public/impressie/torenmolen/image00004.jpeg";
import img5 from "../../public/impressie/torenmolen/image00005.jpeg";
import plattegrond from "../../public/impressie/torenmolen/torenmolen.jpg";

export default function Torenmolen() {
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
            De Torenmolen
          </h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-8">
        <div className="col-span-4">
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Prijzen</h2>
            <div className="text-[--color-text]">
              € 199,00 per nacht(exclusief toeristenbelasting) boeking min. 2
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
                <span>50 m²</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <FaBed className="text-2xl" />
                <span>Tweepersoonsbed</span>
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
                <Image src={plattegrond} alt="..." className="" />
              </Carousel>
            </div>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Inspiratie</h2>
            <p className="py-2 text-[--color-text]">
              Uiteraard mag deze bezienswaardigheid van Zeddam niet ontbreken in
              onze Longstay appartementen. De Grafelijke Korenmolen is een
              torenmolen in Zeddam . Deze molen is de oudste nog bestaande
              windmolen in Nederland.
              <br />
              <br />
              Naar alle waarschijnlijkheid is de molen vóór 1441 gebouwd. De kap
              is afkomstig van een boom die voor 1440 gekapt is. In 1546 werd in
              de omgeving van de molen de nog steeds bestaande rosmolen gebouwd
              zodat ook bij windstilte kon worden gemalen. Tot in de 20e eeuw
              behoorde de molen toe aan de heren en graven van Kasteel Huis
              Bergh. In 1839 werd de inrichting van de molen gemoderniseerd.
              Nadat de molen in de 20e eeuw in particuliere handen kwam dreigde
              sloop. In 1929 werd de molen echter ondergebracht in een
              stichting. De molen werd in 1963, 1974, 1991 en 2005
              gerestaureerd. Op 25 januari 2017 zijn de roeden verwijderd. Vier
              weken later zijn de roeden met nieuw hekwerk weer gestoken. De
              molen heeft twee koppel maalstenen. Het middeleeuwse bouwwerk
              heeft zeer dikke muren en nog zeer oude vloerplanken, waarmee het
              een van de bijzonderste molens in Nederland is.
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
