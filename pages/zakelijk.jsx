import NavbarComponent from "../components/Navbar.jsx";
import FooterComponent from "../components/Footer.jsx";
import { Card } from "flowbite-react";
import Head from "next/head";

export default function Zakelijk() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Zakelijk - Longstay Achterhoek</title>
        <meta name="description" content="Zakelijk Longstay Achterhoek" />
      </Head>
      <NavbarComponent />

      <div className="flex-grow w-full p-2 py-36">
        <div className="max-w-[1240px] m-auto">
          <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
            Zakelijk
          </p>
          <p className="py-2 text-[--color-text]">
            Onze longstay appartementen zijn goed uitgeruste accomodaties zodat
            expats en zakenreizigers zich snel thuis kunnen voelen. Een verblijf
            in een van onze longstay appartementen geeft u meer ruimte en meer
            privacy dan een verblijf in een hotel. Een long stay zakelijk
            verblijf zal snel worden ervaren als &#39;a home away from
            home&#39;, van alle gemakken voorzien met natuurlijk ook een
            schoonmaakservice en wasgelegenheid.
          </p>
          <p className="text-[--color-text]">De prijzen zijn als volgt:</p>
          <div className="md:grid grid-cols-4  py-4">
            <Card className="col-span-1 py-2 m-2 md:mx-0 md:rounded-r-none">
              <h1 className="mb-4 text-xl font-medium text-gray-500 ">
                Vanaf 2 maanden
              </h1>
              <div className="flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  69
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 ">
                  /nacht
                </span>
              </div>
            </Card>
            <Card className="col-span-1 py-2 border-8 border-[--navbar-primary]">
              <h1 className="mb-4 text-xl font-medium text-gray-500 ">
                1 tot 2 maanden
              </h1>
              <div className="flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  79
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 ">
                  /nacht
                </span>
              </div>
            </Card>
            <Card className="col-span-1 py-2 m-2 md:mx-0 md:rounded-none">
              <h1 className="mb-4 text-xl font-medium text-gray-500 ">
                14 dagen tot 1 maand
              </h1>
              <div className="flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  89
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 ">
                  /nacht
                </span>
              </div>
            </Card>
            <Card className="col-span-1 py-2 m-2 md:mx-0 md:rounded-l-none">
              <h1 className="mb-4 text-xl font-medium text-gray-500 ">
                7 dagen tot 14 dagen
              </h1>
              <div className="flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  99
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 ">
                  /nacht
                </span>
              </div>
            </Card>
          </div>
          <p className="text-sm italic text-[--color-text]">
            Disclaimer: Alle prijzen zijn exclusief 21% btw en
            toeristenbelasting € 1,25 p.p.p.n.
          </p>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
