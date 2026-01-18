import NavbarComponent from "../components/Navbar.jsx";
import FooterComponent from "../components/Footer.jsx";
import Head from "next/head";
import Link from "next/link";

export default function Advertisement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Longstay Achterhoek</title>
        <meta
          name="description"
          content="Woonruimte voor expats bij Longstay Achterhoek"
        />
      </Head>
      <NavbarComponent />

      <div className="flex-grow w-full p-2 py-36">
        <div className="max-w-[1240px] m-auto">
          <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
            Woonruimte voor expats
          </p>
          <p className="py-2 text-[--color-text]">
            Bent u op zoek naar tijdelijke woonruimte of zoekt u regelmatig
            longstay appartementen voor expats en/of projectmedewerkers in buurt
            van Zeddam? Onze longstay appartementen zijn comfortabel en
            uitermate geschikt voor de zakelijke markt. Ze zijn gelegen op een
            toplocatie aan de uitvalswegen A12 richting Arnhem en de Duitse A3
            richting Oberhausen.
          </p>
          <p className="italic text-[--color-text]">
            Dichtbij bedrijventerreinen, zoals: &#39;s-Heerenberg (2km), Wehl
            (5km), Ulft (7km), Doetinchem (8km)
          </p>
          <p className="py-2 text-[--color-text]">
            Onze longstay appartementen zijn goed uitgeruste accommodaties zodat
            expats en zakenreizigers zich snel thuis kunnen voelen. Een verblijf
            in een van onze longstay appartementen geeft u meer ruimte en meer
            privacy dan een verblijf in een hotel. Een longstay zakelijk
            verblijf zal snel worden ervaren als &#39;a home away from
            home&#39;, van alle gemakken voorzien met natuurlijk ook een
            schoonmaakservice en wasgelegenheid.
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
