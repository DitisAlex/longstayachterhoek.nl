import { Card } from "flowbite-react";

export default function Business() {
  return (
    <div id="zakelijk" className="w-full p-2 bg-gray-200 py-24">
      <div className="max-w-[1240px] m-auto">
        <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
          Zakelijk
        </p>
        <p className="py-2 text-[--color-text]">
          Onze longstay appartementen zijn goed uitgeruste accomodaties zodat
          expats en zakenreizigers zich snel thuis kunnen voelen. Een verblijf
          in een van onze longstay appartementen geeft u meer ruimte en meer
          privacy dan een verblijf in een hotel. Een long stay zakelijk verblijf
          zal snel worden ervaren als &#39;a home away from home&#39;, van alle
          gemakken voorzien met natuurlijk ook een schoonmaakservice en
          wasgelegenheid.
        </p>
        <p className="text-[--color-text]">De prijzen zijn als volgt:</p>
        <div className="md:grid grid-cols-4  py-4">
          <Card className="col-span-1 py-2 m-2 md:mx-0 md:rounded-r-none">
            <h1 className="mb-4 text-xl font-medium text-gray-500 ">
              Vanaf 2 maanden
            </h1>
            <div className="flex items-baseline text-gray-900">
              <span className="text-3xl font-semibold">€</span>
              <span className="text-5xl font-extrabold tracking-tight">79</span>
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
              <span className="text-3xl font-semibold">€</span>
              <span className="text-5xl font-extrabold tracking-tight">89</span>
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
              <span className="text-3xl font-semibold">€</span>
              <span className="text-5xl font-extrabold tracking-tight">99</span>
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
              <span className="text-3xl font-semibold">€</span>
              <span className="text-5xl font-extrabold tracking-tight">
                109
              </span>
              <span className="ml-1 text-xl font-normal text-gray-500 ">
                /nacht
              </span>
            </div>
          </Card>
        </div>
        <p className="text-sm italic text-[--color-text]">
          Disclaimer: Alle prijzen zijn exclusief 9% btw en toeristenbelasting €
          1,25 p.p.p.n. Facturatie vind iedere twee weken plaats.
        </p>
      </div>
    </div>
  );
}
