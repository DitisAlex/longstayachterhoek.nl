import NavbarComponent from "../components/Navbar.jsx";
import FooterComponent from "../components/Footer.jsx";
import Head from "next/head";
import Link from "next/link";

import { FaRoad, FaWifi, FaTv, FaBed } from "react-icons/fa";
import { TbWashPress, TbAirConditioning } from "react-icons/tb";
import { MdIron, MdKitchen, MdFreeBreakfast } from "react-icons/md";
import { FaCar } from "react-icons/fa6";

export default function Advertisement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Longstay Achterhoek</title>
        <meta
          name="description"
          content="Tijdelijke woonruimte in de Grensstreek bij Longstay Achterhoek"
        />
      </Head>
      <NavbarComponent />

      <div className="flex-grow w-full p-2 py-36">
        <div className="max-w-[1240px] m-auto">
          <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
            Tijdelijke woonruimte in de Grensstreek
          </p>
          <p className="py-2 text-[--color-text]">
            Wanneer je voor langere tijd op zoek bent naar tijdelijke woonruimte
            in de Grensstreek dan is Longstay Achterhoek een geschikte optie...
            <br />
            <br />
            Dit kan handig zijn bij calamiteiten: denk aan waterschade,
            brandschade of andere verzekeringskwesties. Maar ook in geval van
            een scheiding kan dit een tijdelijke oplossing bieden. Of bij
            bijvoorbeeld een verbouwing wanneer je daarvoor ook tijdelijk je
            woning moet verlaten.
            <br />
            <br />
            Onze ingerichte en luxe appartementen bieden alles wat je nodig hebt
            voor een lang en heerlijk verblijf. Perfect om eropuit te gaan en de
            omgeving te ontdekken of juist te genieten van even helemaal niets.
            De woningen beschikken over hoge ramen, wat zorgt voor extra veel
            daglicht. Daarnaast is de slaapkamer voorzien van een badkamer
            ensuite, met een heerlijke douche. De appartementen beschikken over
            een compleet ingerichte keuken met afwasmachine, combi-oven en
            elektrische kookplaat.
          </p>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">
              Voordelen van onze longstay appartementen?
            </h2>
            <ul>
              <li className="flex items-center space-x-2 py-1">
                <FaRoad className="text-2xl" />
                <span>Goede bereikbaarheid (A12 en Duitse A3)</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <FaCar className="text-2xl" />
                <span>Gratis parkeren</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <FaWifi className="text-2xl" />
                <span>Gratis snelle WiFi</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <TbAirConditioning className="text-2xl" />
                <span>Airconditioning</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <FaBed className="text-2xl" />
                <span>Ruime kamers ter grootte van min. 50m2</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <MdFreeBreakfast className="text-2xl" />
                <span>
                  Elke dag vers ontbijt bij Broods (300m), to-go of ter plaatste
                  te nuttigen
                </span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <MdKitchen className="text-2xl" />
                <span>Compleet uitgeruste keuken inclusief vaatwasser</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <FaTv className="text-2xl" />
                <span>Smart Tv 43 inch</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <MdIron className="text-2xl" />
                <span>Externe was/strijkservice</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <TbWashPress className="text-2xl" />
                <span>
                  Schoonmaakservice: bij een verblijf langer dan een week worden
                  de kamers wekelijks schoongemaakt en voorzien van schoon
                  beddengoed en handdoeken
                </span>
              </li>
            </ul>
          </div>
          Zo hoef je nergens meer aan te denken!
          <div className="py-4">
            <h2 className="text-2xl font-semibold">
              Meer informatie over tijdelijke verhuur?
            </h2>
            Graag meer informatie ontvangen over het huren van een appartement
            voor langere tijd? <br />
            <br />
            Neem dan contact met ons op via{" "}
            <Link
              className="underline text-[--navbar-primary]"
              href={"/contact"}
            >
              het contactformulier.
            </Link>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
