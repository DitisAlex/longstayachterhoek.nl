import Link from "next/link";

export default function Facilities() {
  return (
    <div id="faciliteiten" className="w-full p-2 flex items-center py-24">
      <div className="max-w-[1240px] m-auto">
        <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
          Faciliteiten
        </p>
        <p className="py-2 text-[--color-text]">
          Overnacht u binnenkort bij Longstay Achterhoek of bent u nog op zoek
          naar een geschikt hotel? Dan kunnen de faciliteiten van het hotel een
          rol spelen in uw keuze.
          <br /> Longstay Achterhoek biedt verschillende faciliteiten om uw
          verblijf zo prettig mogelijk te maken.
        </p>
        <div className="md:grid grid-cols-3 gap-10 py-4">
          <div className="col-span-1 py-2">
            <h3 className="font-semibold text-lg tracking-wider">
              Bestel takeaway
            </h3>
            <p className="py-1">
              Heeft u een drukke dag gehad en wilt u volledig uitrusten op uw
              kamer? Of bent u samen met uw partner een romantisch nachtje weg?
              Bij Longstay Achterhoek bestelt u uw favoriete gerechten bij het
              aangrenzende{" "}
              <Link href="https://sinchen.nl/" target="_blank">
                <span className="underline text-[--navbar-primary]">
                  specialiteiten restaurant Sin Chen
                </span>
              </Link>{" "}
              en u geniet hiervan op uw eigen privé terras.
            </p>
          </div>
          <div className="col-span-1 py-2">
            <h3 className="font-semibold text-lg tracking-wider">Auto huren</h3>
            <p className="py-1">
              Bent u met het openbaar vervoer gekomen of beschikt u niet over
              een auto? Vraag ons dan voor uw aankomst in ons hotel naar de
              mogelijkheden om een auto te huren.
            </p>
          </div>
          <div className="col-span-1 py-2">
            <h3 className="font-semibold text-lg tracking-wider">
              Fiets huren
            </h3>
            <p className="py-1">
              Wilt u de omgeving per fiets verkennen? Dan kunt u in het
              aangrenzende dorp ‘s-Heerenberg bij{" "}
              <Link
                href="https://nijlandtweewielers.nl/fietsverhuur"
                target="_blank"
              >
                <span className="underline text-[--navbar-primary]">
                  Nijland Tweeielers
                </span>
              </Link>{" "}
              een fiets huren. Bekijk deze site voor de mogelijkheden tijdens uw
              verblijf.
            </p>
          </div>
          <div className="col-span-1 py-2">
            <h3 className="font-semibold text-lg tracking-wider">
              Mountainbike huren
            </h3>
            <p className="py-1">
              Wilt u net als vele anderen onze fantastische MTB route verkennen?
              Dan kunt u ook bij{" "}
              <Link
                href="https://bercbike.nl/losse-verhuur-mtb/"
                target="_blank"
              >
                <span className="underline text-[--navbar-primary]">
                  Berc Bike
                </span>
              </Link>{" "}
              een mountainbike of gravelbike huren. Vraag naar de mogelijkheden
              bij dit bedrijf voor aankomst van uw verblijf.
            </p>
          </div>
          <div className="col-span-1 py-2">
            <h3 className="font-semibold text-lg tracking-wider">
              Verblijf met uw huisdier
            </h3>
            <p className="py-1">
              Wilt u graag met uw trouwe viervoeter verblijven in ons
              apart-hotel? In de meeste appartementen is een huisdier (tegen
              betaling) toegestaan. En het Montferlandse bos kent een prachtige
              loslooproute voor uw trouwe viervoeter.
              <br />
              <br />
              <span className="italic">
                Enkel bij onze appartementen De Lange Wei en de Padevoort is dit
                helaas niet toegestaan.
              </span>
            </p>
          </div>
          <div className="col-span-1 py-2">
            <h3 className="font-semibold text-lg tracking-wider">
              Vers ontbijt
            </h3>
            <p className="py-1">
              Liever in de ochtend gelijk een kant en klaar broodje voor uw
              neus? Op loopafstand kunt u een vers ontbijt halen bij{" "}
              <Link href="https://www.broodsbroodjesbar.nl/" target="_blank">
                <span className="underline text-[--navbar-primary]">
                  BROODS
                </span>
              </Link>
              .
            </p>
          </div>
          <div className="col-span-1 py-2">
            <h3 className="font-semibold text-lg tracking-wider">
              Beauty & Wellness
            </h3>
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
            <h3 className="font-semibold text-lg tracking-wider">
              Sporten met personal trainer
            </h3>
            <p className="py-1">
              Heeft u zin om te sporten met of zonder personal trainer? Dat kan
              bij{" "}
              <Link href="https://clcsports.nl/" target="_blank">
                <span className="underline text-[--navbar-primary]">
                  CLG Sports
                </span>{" "}
                in &#39;s-Heerenberg
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
