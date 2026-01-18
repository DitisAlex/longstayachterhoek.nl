import NavbarComponent from "../components/Navbar.jsx";
import FooterComponent from "../components/Footer.jsx";
import Head from "next/head";
import Link from "next/link";
import { Card } from "flowbite-react";

export default function Advertisement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Longstay Achterhoek</title>
        <meta
          name="description"
          content="Volledig ingerichte appartementen in s-Heerenberg bij Longstay Achterhoek"
        />
      </Head>
      <NavbarComponent />

      <div className="flex-grow w-full p-2 py-36">
        <div className="max-w-[1240px] m-auto">
          <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
            Volledig ingerichte appartementen in s-Heerenberg
          </p>
          <p className="py-2 text-[--color-text]">
            Op zoek naar een serviceappartement in s-Heerenberg? Voor
            kortetermijnprojecten tot langdurige werknemersverplaatsingen bieden
            onze serviceappartementen de ruimte, het design en het comfort van
            een thuis.
          </p>
          <p className="py-2 text-[--color-text]">
            Ruimte en Comfort: Onze appartementen zijn aanzienlijk groter dan
            typische hotelkamers en bieden aparte woon-, eet- en slaapgedeeltes.
            Deze extra ruimte is essentieel voor een comfortabel langer
            verblijf, waardoor zakelijke gasten een productieve routine kunnen
            aanhouden, collega's kunnen ontvangen en zich echt thuis kunnen
            voelen.
          </p>
          <p className="py-2 text-[--color-text]">
            Financiële Waarde en Flexibiliteit: Serviceappartementen zijn een
            zeer kosteneffectieve optie voor langdurige verblijven, vooral met
            volledig uitgeruste keukens die aanzienlijke besparingen op
            maaltijdkosten mogelijk maken.
          </p>
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
