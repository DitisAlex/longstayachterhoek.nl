import Link from "next/link";

export default function Facilities() {
  return (
    <div id="faciliteiten" className="w-full p-2 flex items-center py-24">
      <div className="max-w-[1240px] m-auto">
        <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
          Faciliteiten
        </p>
        <p className="py-2 text-[--color-text]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          eius, ea similique qui dignissimos nemo quod cupiditate sunt quidem
          incidunt vel ullam reiciendis praesentium maxime quae repellendus
          facere iste ex tempore, veritatis labore asperiores suscipit et alias.
        </p>
        <div className="md:grid grid-cols-3 gap-10 py-4">
          <div className="col-span-1 py-2">
            <h3 className="font-semibold text-lg tracking-wider">Iets Leuks</h3>
            <p className="py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              tenetur.
            </p>
            <Link href="https://www.google.com" target="_blank">
              <p className="underline text-[--navbar-primary]">Lees meer</p>
            </Link>
          </div>
          <div className="col-span-1 py-2">
            <h3 className="font-semibold text-lg tracking-wider">Iets Leuks</h3>
            <p className="py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              tenetur.
            </p>
            <Link href="https://www.google.com" target="_blank">
              <p className="underline text-[--navbar-primary]">Lees meer</p>
            </Link>
          </div>{" "}
          <div className="col-span-1 py-2">
            <h3 className="font-semibold text-lg tracking-wider">Iets Leuks</h3>
            <p className="py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              tenetur.
            </p>
            <Link href="https://www.google.com" target="_blank">
              <p className="underline text-[--navbar-primary]">Lees meer</p>
            </Link>
          </div>{" "}
          <div className="col-span-1 py-2">
            <h3 className="font-semibold text-lg tracking-wider">Iets Leuks</h3>
            <p className="py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              tenetur.
            </p>
            <Link href="https://www.google.com" target="_blank">
              <p className="underline text-[--navbar-primary]">Lees meer</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
