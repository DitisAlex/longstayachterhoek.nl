import Image from "next/image";
import Link from "next/link";

import logo from "../public/hd/eigenaren.jpg";

export default function About() {
  return (
    <div id="about" className="w-full p-2 flex items-center py-24">
      <div className="max-w-[1240px] m-auto">
        <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
          Over Longstay Achterhoek
        </p>
        <p className="py-2 text-[--color-text]">
          Longstay Achterhoek is een Aparthotel met negen volledig ingerichte
          appartementen inclusief keuken. Onze appartementen zijn nieuw gebouwd
          en voorzien van alle comfort en gemakken, daarnaast zijn ze erg ruim
          en beschikt ieder appartement over een eigen terras. <br />
          <br />
          Bent u op zoek naar tijdelijke woonruimte of zoekt u regelmatig
          longstay appartementen voor expats en/of projectmedewerkers in buurt
          van Zeddam? Onze longstay appartementen zijn comfortabel en uitermate
          geschikt voor de zakelijke markt. Ze zijn gelegen op een toplocatie
          aan de uitvalswegen A12 richting Arnhem en de Duitse A3 richting
          Oberhausen. <br />
          <br />
          <i>
            Dichtbij bedrijventerreinen, zoals: &#39;s-Heerenberg (2km), Wehl
            (5km), Ulft (7km), Doetinchem (8km)
          </i>
          <br />
          <br /> Bij ons zijn gasten verzekerd van een ruim, schoon en gastvrij
          appartement dat voorzien is van alle comfort. Een langdurig verblijf
          wordt een verademing, wij bieden onze gasten absolute rust en privacy
          in een comfortabele en huiselijke omgeving.
        </p>
        <p className="py-2 text-[--color-text]">
          <b>Wat is een longstay appartement?</b>
          <br />
          Longstay appartementen zijn goed uitgeruste accommodaties die extra
          diensten en voorzieningen bieden ten opzichte van standaard hotels,
          speciaal voor gasten die langer in deze appartementen verblijven. Deze
          voorzieningen zijn bedoeld om gasten, zoals bijvoorbeeld expats en
          zakenreizigers, zich snel thuis te laten voelen. Onze appartementen
          zijn volledig ingericht en van alle gemakken voorzien. Natuurlijk kunt
          u met al uw vragen over de appartementen, faciliteiten en de omgeving
          bij ons terecht. Wij zorgen graag voor een zorgeloos verblijf!
        </p>
        <div className="py-2 text-[--color-text]">
          <p>
            <b>Voordelen van onze longstay appartementen?</b>
            <br />
            Onze appartementen zijn van alle gemakken voorzien:
          </p>
          <ul className="ml-8 list-disc">
            <li>Goede bereikbaarheid (A12 en Duitse A3)</li>
            <li>Gratis parkeren</li>
            <li>Gratis snelle WiFi</li>
            <li>Airconditioning</li>
            <li>Ruime kamers ter grootte van min 50m2</li>
            <li>
              Elke dag vers ontbijt bij Broods (300m), to-go of ter plaatste te
              nuttigen
            </li>
            <li>Compleet uitgeruste keuken inclusief vaatwasser</li>
            <li>Smart Tv 43 inch</li>
            <li>Externe was/strijkservice</li>
            <li>
              Schoonmaakservice: bij een verblijf langer dan een week worden de
              kamers wekelijks schoongemaakt en voorzien van schoon beddengoed
              en handdoeken
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
