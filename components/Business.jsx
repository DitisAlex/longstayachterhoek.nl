import { Card } from "flowbite-react";

export default function Business() {
  return (
    <div id="zakelijk" className="w-full p-2 bg-gray-200 py-24">
      <div className="max-w-[1240px] m-auto">
        <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
          Zakelijk
        </p>
        <p className="py-2 text-[--color-text]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          eius, ea similique qui dignissimos nemo quod cupiditate sunt quidem
          incidunt vel ullam reiciendis praesentium maxime quae repellendus
          doloribus, voluptates quos.
        </p>
        <p className="text-[--color-text]">De prijzen zijn als volgt:</p>
        <div className="md:grid grid-cols-4  py-4">
          <Card className="col-span-1 py-2 my-2 rounded-r-none">
            <h5 className="mb-4 text-xl font-medium text-gray-500 ">
              Vanaf 2 maanden
            </h5>
            <div className="flex items-baseline text-gray-900">
              <span className="text-3xl font-semibold">€</span>
              <span className="text-5xl font-extrabold tracking-tight">99</span>
              <span className="ml-1 text-xl font-normal text-gray-500 ">
                /nacht
              </span>
            </div>
          </Card>
          <Card className="col-span-1 py-2 border-8 border-double border-[--navbar-primary]">
            <h5 className="mb-4 text-xl font-medium text-gray-500 ">
              1 tot 2 maanden
            </h5>
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
          <Card className="col-span-1 py-2 my-2 rounded-none">
            <h5 className="mb-4 text-xl font-medium text-gray-500 ">
              14 dagen tot 1 maand
            </h5>
            <div className="flex items-baseline text-gray-900">
              <span className="text-3xl font-semibold">€</span>
              <span className="text-5xl font-extrabold tracking-tight">
                119
              </span>
              <span className="ml-1 text-xl font-normal text-gray-500 ">
                /nacht
              </span>
            </div>
          </Card>
          <Card className="col-span-1 py-2 my-2 rounded-l-none">
            <h5 className="mb-4 text-xl font-medium text-gray-500 ">
              7 dagen tot 14 dagen
            </h5>
            <div className="flex items-baseline text-gray-900">
              <span className="text-3xl font-semibold">€</span>
              <span className="text-5xl font-extrabold tracking-tight">
                129
              </span>
              <span className="ml-1 text-xl font-normal text-gray-500 ">
                /nacht
              </span>
            </div>
          </Card>
        </div>
        <p className="text-sm italic text-[--color-text]">
          Disclaimer: Alle prijzen zijn exclusief 6% btw en toeristenbelasting.
          Facturatie vind iedere twee weken plaats.
        </p>
      </div>
    </div>
  );
}
