import NavbarComponent from "../components/Navbar.jsx";
import FooterComponent from "../components/Footer.jsx";
import Image from "next/image";
import Link from "next/link";
import { Button, Card } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import Hulzenberg from "../public/suites/hulzenberg.jpg";
import Slipjacht from "../public/suites/slipjacht.jpg";
import HuisBergh from "../public/suites/huisbergh.jpg";
import Bergherbos from "../public/suites/bergherbos.jpg";
import OudeIjssel from "../public/suites/oudeijssel.jpg";
import MTBRoute from "../public/suites/mtbroute.jpg";
import LangeWei from "../public/suites/langewei.jpg";
import Padevoort from "../public/suites/padevoort.jpg";
import Torenmolen from "../public/suites/torenmolen.jpg";
import Head from "next/head";

export default function Suites() {
  const customTheme = {
    button: {
      color: {
        success:
          "w-full border border-transparent bg-[--navbar-primary] outline outline-2 text-white focus:ring-2 focus:ring-[--color-bg] enabled:hover:bg-[--navbar-button-hover]",
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Suites - Longstay Achterhoek</title>
        <meta name="description" content="Suites Longstay Achterhoek" />
      </Head>
      <NavbarComponent />

      <div className="flex-grow w-full p-2 py-36">
        <div className="max-w-[1240px] m-auto">
          <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
            Suites
          </p>
          <p className="py-2 text-[--color-text]">
            Longstay Achterhoek, &#39;a home away from home&#39;. De naam zegt
            het al. Onze suites staan voor comfort, gemak en een gevoel van
            thuis komen.
            <br />
            <br />
            Onze negen verschillende appartementen vertegenwoordigen allen een
            ander thema. Geen standaard &#39;hotel-chique&#39; maar een ware
            beleving tijdens uw verblijf. Of u nu voor zaken of uw plezier bij
            ons verblijft, onze appartementen bieden alle gemakken van thuis op
            een zeer unieke locatie in de Achterhoek aan de voet van het
            Montferlandse bos.
            <br />
            <br />
            Temidden van veel groen en een rustige omgeving maar toch dichtbij
            uitvalswegen, een busstation, een supermarkt en vele eetgelegenheden
            waaronder een uitstekend Aziatisch specialiteiten restaurant van
            onze Longstay zelf, namelijk{" "}
            <Link href="https://sinchen.nl/" target="_blank">
              <span className="underline text-[--navbar-primary]">
                Sin Chen
              </span>
            </Link>
            . Dit restaurant is al meer dan 35 een begrip in de omgeving en
            verre omstreken.
            <br />
            <br /> U kunt hier zelfs uw gerechten afhalen en op uw eigen privé
            terras genieten met uitzicht op het Montferlandse bos.
          </p>
          <div className="block mt-2">
            <Flowbite theme={{ theme: customTheme }}>
              <div className="grid md:grid-cols-3 gap-8">
                <Card
                  className="max-w-sm"
                  renderImage={() => (
                    <Image
                      width={400}
                      height={400}
                      src={Hulzenberg}
                      alt="image 1"
                      className="rounded-md rounded-b-none"
                    />
                  )}
                >
                  <h1 className="text-2xl font-bold tracking-tight text-[--color-text]">
                    Uitkijktoren Hulzenberg
                  </h1>
                  <Link href="/suites/uitkijktoren-hulzenberg">
                    <Button
                      color="success"
                      className="font-semibold tracking-wider"
                    >
                      Lees Meer
                    </Button>
                  </Link>
                </Card>
                <Card
                  className="max-w-sm"
                  renderImage={() => (
                    <Image
                      width={400}
                      height={400}
                      src={Slipjacht}
                      alt="image 1"
                      className="rounded-md rounded-b-none"
                    />
                  )}
                >
                  <h1 className="text-2xl font-bold tracking-tight text-[--color-text]">
                    Slipjacht
                  </h1>
                  <Link href="/suites/slipjacht">
                    <Button
                      color="success"
                      className="font-semibold tracking-wider"
                    >
                      Lees Meer
                    </Button>
                  </Link>
                </Card>
                <Card
                  className="max-w-sm"
                  renderImage={() => (
                    <Image
                      width={400}
                      height={400}
                      src={HuisBergh}
                      alt="image 1"
                      className="rounded-md rounded-b-none"
                    />
                  )}
                >
                  <h1 className="text-2xl font-bold tracking-tight text-[--color-text]">
                    Kasteel Huis Bergh
                  </h1>
                  <Link href="/suites/kasteel-huis-bergh">
                    <Button
                      color="success"
                      className="font-semibold tracking-wider"
                    >
                      Lees Meer
                    </Button>
                  </Link>
                </Card>
                <Card
                  className="max-w-sm"
                  renderImage={() => (
                    <Image
                      width={400}
                      height={400}
                      src={Bergherbos}
                      alt="image 1"
                      className="rounded-md rounded-b-none"
                    />
                  )}
                >
                  <h1 className="text-2xl font-bold tracking-tight text-[--color-text]">
                    Bergherbos
                  </h1>
                  <Link href="/suites/bergherbos">
                    <Button
                      color="success"
                      className="font-semibold tracking-wider"
                    >
                      Lees Meer
                    </Button>
                  </Link>
                </Card>
                <Card
                  className="max-w-sm"
                  renderImage={() => (
                    <Image
                      width={400}
                      height={400}
                      src={OudeIjssel}
                      alt="image 1"
                      className="rounded-md rounded-b-none"
                    />
                  )}
                >
                  <h1 className="text-2xl font-bold tracking-tight text-[--color-text]">
                    Oude Ijssel
                  </h1>
                  <Link href="/suites/oude-ijssel">
                    <Button
                      color="success"
                      className="font-semibold tracking-wider"
                    >
                      Lees Meer
                    </Button>
                  </Link>
                </Card>
                <Card
                  className="max-w-sm"
                  renderImage={() => (
                    <Image
                      width={400}
                      height={400}
                      src={MTBRoute}
                      alt="image 1"
                      className="rounded-md rounded-b-none"
                    />
                  )}
                >
                  <h1 className="text-2xl font-bold tracking-tight text-[--color-text]">
                    MTB-Route
                  </h1>
                  <Link href="/suites/mtb-route">
                    <Button
                      color="success"
                      className="font-semibold tracking-wider"
                    >
                      Lees Meer
                    </Button>
                  </Link>
                </Card>
                <Card
                  className="max-w-sm"
                  renderImage={() => (
                    <Image
                      width={400}
                      height={400}
                      src={LangeWei}
                      alt="image 1"
                      className="rounded-md rounded-b-none"
                    />
                  )}
                >
                  <h1 className="text-2xl font-bold tracking-tight text-[--color-text]">
                    De Lange Wei
                  </h1>
                  <Link href="/suites/lange-wei">
                    <Button
                      color="success"
                      className="font-semibold tracking-wider"
                    >
                      Lees Meer
                    </Button>
                  </Link>
                </Card>
                <Card
                  className="max-w-sm"
                  renderImage={() => (
                    <Image
                      width={400}
                      height={400}
                      src={Padevoort}
                      alt="image 1"
                      className="rounded-md rounded-b-none"
                    />
                  )}
                >
                  <h1 className="text-2xl font-bold tracking-tight text-[--color-text]">
                    De Padevoort
                  </h1>
                  <Link href="/suites/padevoort">
                    <Button
                      color="success"
                      className="font-semibold tracking-wider"
                    >
                      Lees Meer
                    </Button>
                  </Link>
                </Card>
                <Card
                  className="max-w-sm"
                  renderImage={() => (
                    <Image
                      width={400}
                      height={400}
                      src={Torenmolen}
                      alt="image 1"
                      className="rounded-md rounded-b-none"
                    />
                  )}
                >
                  <h1 className="text-2xl font-bold tracking-tight text-[--color-text]">
                    De Torenmolen
                  </h1>
                  <Link href="/suites/torenmolen">
                    <Button
                      color="success"
                      className="font-semibold tracking-wider"
                    >
                      Lees Meer
                    </Button>
                  </Link>
                </Card>
              </div>
            </Flowbite>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
