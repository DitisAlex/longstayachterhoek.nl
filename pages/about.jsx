import Image from "next/image";
import Link from "next/link";
import NavbarComponent from "../components/Navbar.jsx";
import FooterComponent from "../components/Footer.jsx";
import logo from "../public/hd/eigenaren.jpg";
import Head from "next/head";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Over Ons - Longstay Achterhoek</title>
        <meta name="description" content="Over Ons Longstay Achterhoek" />
      </Head>
      <NavbarComponent />

      <div className="flex-grow w-full p-2 flex items-center py-28">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
              Over Ons
            </p>
            <p className="py-2 text-[--color-text]">
              Dit hotel is gevestigd in het achterste deel van het pand gelegen
              aan de Terborgseweg 2 te Zeddam waar voorheen een succesvol
              buffetrestaurant werd gerund met 300 zitplaatsen. Na een
              rigoureuze verbouwing is het nu veranderd in een prachtig
              aparthotel met negen volledig ingerichte suites. Aan de voorzijde
              kan er nog steeds heerlijk worden gegeten in{" "}
              <Link href="https://sinchen.nl/" target="_blank">
                <span className="underline text-[--navbar-primary]">
                  het à la carte restaurant, Sin Chen,
                </span>
              </Link>{" "}
              ook gerund door de familie die als motto heeft: &#39;stilstand is
              achteruitgang&#39; en die tevens erg trots is op dit prachtige
              stukje Achterhoek aan de voet van de Montferlandse bossen. Onze
              longstay appartementen zijn naast recreatief gebruik uiterst
              geschikt voor de zakelijke markt.
              <br />
              <br />
              Het Montferlandse bos, een van de mooiste natuurgebieden in
              Nederland, ligt op loopafstand (350m). Longstay Achterhoek biedt
              haar gasten rust, ruimte en privacy in het pittoreske dorp Zeddam.
              <br />
              <br /> Zeddam, ook wel bekend als Seydehem in het Nederfrankisch,
              betekent &#39;woonplaats aan heuvel&#39;. Het is een dorpskern in
              de gemeente Montferland, die vroeger bekend stond als de gemeente
              Bergh. Een prachtig pittoresk dorp maar ook gunstig gelegen ten
              opzichte van verschillende uitvalswegen.
            </p>
          </div>
          <div className="py-4 items-center flex">
            <Image
              src={logo}
              alt="Logo"
              width={1000}
              height={1000}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
