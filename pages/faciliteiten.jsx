import NavbarComponent from "../components/Navbar.jsx";
import FooterComponent from "../components/Footer.jsx";
import Link from "next/link";
import Head from "next/head";

export default function Faciliteiten() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Faciliteiten - Longstay Achterhoek</title>
        <meta name="description" content="Faciliteiten Longstay Achterhoek" />
      </Head>
      <NavbarComponent />

      <div className="flex-grow w-full p-2 flex items-center py-36">
        <div className="max-w-[1240px] m-auto">
          <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
            Faciliteiten
          </p>
          <p className="py-2 text-[--color-text]">
            Overnacht u binnenkort bij Longstay Achterhoek of bent u nog op zoek
            naar een geschikt hotel? Dan kunnen de faciliteiten van het hotel
            een rol spelen in uw keuze.
            <br /> Longstay Achterhoek biedt verschillende faciliteiten om uw
            verblijf zo prettig mogelijk te maken.
          </p>
          <div className="md:grid grid-cols-3 gap-10 py-4">
            <div className="col-span-1 py-2">
              <h1 className="font-semibold text-lg tracking-wider">
                Bestel takeaway
              </h1>
              <p className="py-1">
                Heeft u een drukke dag gehad en wilt u volledig uitrusten op uw
                kamer? Of bent u samen met uw partner een romantisch nachtje
                weg? Bij Longstay Achterhoek bestelt u uw favoriete gerechten
                bij het aangrenzende{" "}
                <Link href="https://sinchen.nl/" target="_blank">
                  <span className="underline text-[--navbar-primary]">
                    specialiteiten restaurant Sin Chen
                  </span>
                </Link>{" "}
                en u geniet hiervan op uw eigen privé terras.
              </p>
            </div>
            <div className="col-span-1 py-2">
              <h1 className="font-semibold text-lg tracking-wider">
                Auto huren
              </h1>
              <p className="py-1">
                Bent u met het openbaar vervoer gekomen of beschikt u niet over
                een auto? Vraag ons dan voor uw aankomst in ons hotel naar de
                mogelijkheden om een auto te huren.
              </p>
            </div>
            <div className="col-span-1 py-2">
              <h1 className="font-semibold text-lg tracking-wider">
                Fiets huren
              </h1>
              <p className="py-1">
                Wilt u de omgeving per fiets verkennen? Dan kunt u in het
                aangrenzende dorp &#39;s-Heerenberg bij{" "}
                <Link
                  href="https://nijlandtweewielers.nl/fietsverhuur"
                  target="_blank"
                >
                  <span className="underline text-[--navbar-primary]">
                    Nijland Tweeielers
                  </span>
                </Link>{" "}
                een fiets huren. Bekijk deze site voor de mogelijkheden tijdens
                uw verblijf.
              </p>
            </div>
            <div className="col-span-1 py-2">
              <h1 className="font-semibold text-lg tracking-wider">
                Mountainbike huren
              </h1>
              <p className="py-1">
                Wilt u net als vele anderen onze fantastische MTB route
                verkennen? Dan kunt u ook bij{" "}
                <Link
                  href="https://bercbike.nl/losse-verhuur-mtb/"
                  target="_blank"
                >
                  <span className="underline text-[--navbar-primary]">
                    Berc Bike
                  </span>
                </Link>{" "}
                een mountainbike of gravelbike huren. Vraag naar de
                mogelijkheden bij dit bedrijf voor aankomst van uw verblijf.
              </p>
            </div>
            <div className="col-span-1 py-2">
              <h1 className="font-semibold text-lg tracking-wider">
                Verblijf met uw huisdier
              </h1>
              <p className="py-1">
                Wilt u graag met uw trouwe viervoeter verblijven in ons
                apart-hotel? In de meeste appartementen is een huisdier (tegen
                betaling) toegestaan. En het Montferlandse bos kent een
                prachtige loslooproute voor uw trouwe viervoeter.
                <br />
                <br />
                <span className="italic">
                  Enkel bij onze appartementen De Lange Wei en de Padevoort is
                  dit helaas niet toegestaan.
                </span>
              </p>
            </div>
            <div className="col-span-1 py-2">
              <h1 className="font-semibold text-lg tracking-wider">
                Vers ontbijt
              </h1>
              <p className="py-1">
                Wenst u in de ochtend gebruik te maken van een voor u vers
                bereid ontbijt? Op loopafstand kunt u hiervan gebruik maken bij{" "}
                <Link href="https://www.broodsbroodjesbar.nl/" target="_blank">
                  <span className="underline text-[--navbar-primary]">
                    BROODS
                  </span>
                </Link>
                .
                <br />
                <br />
                <span className="italic">
                  (Dagelijks geopend vanaf 07:00 uur)
                </span>
              </p>
            </div>
            <div className="col-span-1 py-2">
              <h1 className="font-semibold text-lg tracking-wider">
                Beauty & Wellness
              </h1>
              <p className="py-1">
                Wilt u eventjes lekker onstappen in een sauna? Dan kunt u naar
                Braamt toe voor het{" "}
                <Link href="https://www.palestra.nl/" target="_blank">
                  <span className="underline text-[--navbar-primary]">
                    Beauty & Wellness centre Palestra
                  </span>
                </Link>
                .
              </p>
            </div>
            <div className="col-span-1 py-2">
              <h1 className="font-semibold text-lg tracking-wider">
                Sporten met personal trainer
              </h1>
              <p className="py-1">
                Heeft u zin om te sporten met of zonder personal trainer? Dat
                kan bij{" "}
                <Link href="https://clcsports.nl/" target="_blank">
                  <span className="underline text-[--navbar-primary]">
                    CLG Sports
                  </span>{" "}
                  in &#39;s-Heerenberg
                </Link>
                .
              </p>
            </div>
            <div className="col-span-1 py-2">
              <h1 className="font-semibold text-lg tracking-wider">
                Externe wasservice/strijkservice
              </h1>
              <p className="py-1">
                Wil u uw kleding laten wassen of strijken? Dat kan geregeld
                worden door{" "}
                <Link href="https://destrijkstudio.nl/" target="_blank">
                  <span className="underline text-[--navbar-primary]">
                    De Strijkstudio
                  </span>{" "}
                  in Braamt
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
